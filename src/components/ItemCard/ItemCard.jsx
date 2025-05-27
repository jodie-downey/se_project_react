import "./ItemCard.css";

function ItemCard({ item, onCardClick }) {
  const handleCardClick = () => {
    onCardClick(item);
  };
  return (
    <div className="item-card__container ">
      <h2 className="item-card__title">{item.name}</h2>
      <img
        onClick={handleCardClick}
        className="item-card__img"
        src={item.link}
        alt={item.name}
      />
    </div>
  );
}

export default ItemCard;
