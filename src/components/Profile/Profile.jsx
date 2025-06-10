import SideBar from "../SideBar/SideBar";
import ClothingSection from "../ClothingSection/ClothingSection";
import "./Profile.css";

function Profile({ handleCardClick, clothingItems }) {
  return (
    <div className="profile__container">
      <section className="profile__sidebar">
        {" "}
        <SideBar />{" "}
      </section>
      <section className="profile__clothing-section">
        <ClothingSection
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
        />
      </section>
    </div>
  );
}

export default Profile;
