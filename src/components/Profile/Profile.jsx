import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  handleCardClick,
  clothesItems,
  handleButtonClick,
  handleLogoutClick,
  handleEditProfileClick,
}) {
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
          clothesItems={clothesItems}
          handleButtonClick={handleButtonClick}
        />
      </section>
    </div>
  );
}

export default Profile;
