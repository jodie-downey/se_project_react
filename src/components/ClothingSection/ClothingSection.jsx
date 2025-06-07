import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "../Main/cards.css";
import "./ClothingSection.css";

function ClothingSection({ handleCardClick }) {
  return (
    <div className="clothing__section-container">
      <div className="clothing__section-upper-text">
        <p className="clothing__section-text">Your Items</p>
        <button className="clothing__section-button">+ Add New</button>
      </div>
      <section className="cards">
        <ul className="cards__list">
          {defaultClothingItems.map((item) => {
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

export default ClothingSection;
