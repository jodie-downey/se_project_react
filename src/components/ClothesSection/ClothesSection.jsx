import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import ItemCard from "../ItemCard/ItemCard";
import "../Main/cards.css";
import "./ClothesSection.css";

function ClothesSection({
  handleCardClick,
  clothesItems,
  handleButtonClick,
  handleCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="clothes__section-container">
      <div className="clothes__section-upper-text">
        <p className="clothes__section-text">Your Items</p>
        <button onClick={handleButtonClick} className="clothes__section-button">
          + Add New
        </button>
      </div>
      <section className="cards">
        <ul className="cards__list">
          {clothesItems.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default ClothesSection;
