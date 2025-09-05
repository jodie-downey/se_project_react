import { useContext } from "react";

import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({
  handleCardClick,
  clothesItems,
  handleButtonClick,
  handleLogoutClick,
  handleEditProfileClick,
  handleCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="profile__container">
      <section className="profile__sidebar">
        {" "}
        <SideBar
          handleLogoutClick={handleLogoutClick}
          handleEditProfileClick={handleEditProfileClick}
        />{" "}
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothesItems={clothesItems.filter((item) => {
            console.log(currentUser, clothesItems);
            return item.owner._id === currentUser._id;
          })}
          handleButtonClick={handleButtonClick}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
