import ItemCard from "../ItemCard/ItemCard";
import "../Main/cards.css";
import "./ClothesSection.css";

function ClothesSection({ handleCardClick, clothesItems, handleButtonClick }) {
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
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default ClothesSection;
