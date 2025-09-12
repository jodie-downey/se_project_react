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

  const filteredClothesItems = clothesItems.filter((item) => {
    const ownerID =
      typeof item.owner === "string" ? item.owner : item.owner?._id;
    return ownerID === currentUser._id;
  });

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
          clothesItems={filteredClothesItems}
          handleButtonClick={handleButtonClick}
          handleCardLike={handleCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
