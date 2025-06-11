import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ handleCardClick, clothesItems }) {
  return (
    <div className="profile__container">
      <section className="profile__sidebar">
        {" "}
        <SideBar />{" "}
      </section>
      <section className="profile__clothes-section">
        <ClothesSection
          handleCardClick={handleCardClick}
          clothesItems={clothesItems}
        />
      </section>
    </div>
  );
}

export default Profile;
