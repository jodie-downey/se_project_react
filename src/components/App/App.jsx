import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import CurrentTemperatureUnitContext from "../../contexts/currentTemperatureUnit";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Profile from "../Profile/Profile";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

import { getweather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import {
  getItems,
  postItems,
  deleteItem,
  patchEditUser,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { postUser, postUserLogin, checkToken } from "../../utils/auth";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "cold",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });
  const [isLoggedIn, setUserLoggedIn] = useState(false);

  const [newUser, setNewUser] = useState({});
  const [clothesItems, setClothesItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [newItem, setnewItem] = useState({});

  const [currentUser, setUserInfo] = useState("");

  const navigate = useNavigate();

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddButtonClick = () => {
    setActiveModal("add garment");
  };

  const handleSignupButtonClick = () => {
    setActiveModal("signup");
  };

  const handleSigninButtonClick = () => {
    setActiveModal("signin");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit");
  };

  function getUserInfo(token) {
    if (token) {
      return checkToken(token)
        .then((res) => {
          if (res) {
            setUserInfo(res);
            setUserLoggedIn(true);
          }
        })
        .catch((error) => {
          console.error("Error checking token:", error);
        });
    }
  }

  const handleRegisterModalSubmit = ({ email, password, name, avatar }) => {
    postUser({ email, password, name, avatar })
      .then((data) => {
        setNewUser(data);
        handleLoginModalSubmit({ email, password });
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error checking token:", error);
      });
  };

  const handleEditProfileModalSubmit = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    patchEditUser({ name, avatar }, token)
      .then((data) => {
        setUserInfo(data);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error checking token:", error);
      });
  };

  const handleLoginModalSubmit = ({ email, password }) => {
    postUserLogin({ email, password })
      .then((userData) => {
        localStorage.setItem("jwt", userData.token);
        const token = localStorage.getItem("jwt");
        getUserInfo(token);
        setUserLoggedIn(true);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error checking token:", error);
      });
  };

  const handleLogout = () => {
    const token = localStorage.getItem("jwt");
    localStorage.removeItem("jwt", token);
    setUserLoggedIn(false);
    navigate("/");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    const token = localStorage.getItem("jwt");
    postItems({ name, imageUrl, weather }, token)
      .then((data) => {
        setnewItem(data);
        setClothesItems([data, ...clothesItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleDelete = () => {
    const token = localStorage.getItem("jwt");
    deleteItem(selectedCard._id, token)
      .then((item) => {
        setClothesItems(
          clothesItems.filter((item) => item._id !== selectedCard._id)
        );
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error checking token:", error);
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    console.log("handleCardLike called with:", { id, isLiked });
    const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothesItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
            console.log("card liked");
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothesItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getweather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothesItems(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      handleSigninButtonClick();
    }
    if (token) {
      getUserInfo(token).then(() => setUserLoggedIn(true));
    }
  }, []);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const ProtectedRoute = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
        <div className="page">
          <div className="page__content">
            <Header
              handleSignupButtonClick={handleSignupButtonClick}
              handleAddButtonClick={handleAddButtonClick}
              handleSigninButtonClick={handleSigninButtonClick}
              weatherData={weatherData}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothesItems={clothesItems}
                    handleCardLike={handleCardLike}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleCardClick={handleCardClick}
                      clothesItems={clothesItems}
                      handleButtonClick={handleAddButtonClick}
                      handleLogoutClick={handleLogout}
                      handleEditProfileClick={handleEditProfileClick}
                      handleCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
            {
              <RegisterModal
                isOpen={activeModal === "signup"}
                activeModal={activeModal}
                handleCloseClick={closeActiveModal}
                onRegisterModalSubmit={handleRegisterModalSubmit}
                handleSigninButtonClick={handleSigninButtonClick}
                newUser={newUser}
              />
            }
            {
              <EditProfileModal
                isOpen={activeModal === "edit"}
                activeModal={activeModal}
                onEditProfileModalSubmit={handleEditProfileModalSubmit}
                handleCloseClick={closeActiveModal}
                editUser={currentUser}
              />
            }
            {
              <LoginModal
                isOpen={activeModal === "signin"}
                activeModal={activeModal}
                handleCloseClick={closeActiveModal}
                onLoginModalSubmit={handleLoginModalSubmit}
                handleSignupButtonClick={handleSignupButtonClick}
              />
            }
            {
              <AddItemModal
                isOpen={activeModal === "add garment"}
                activeModal={activeModal}
                handleCloseClick={closeActiveModal}
                onAddItemModalSubmit={handleAddItemModalSubmit}
                newItem={newItem}
              />
            }
            <ItemModal
              activeModal={activeModal}
              card={selectedCard}
              handleCloseClick={closeActiveModal}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </CurrentUserContext.Provider>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
