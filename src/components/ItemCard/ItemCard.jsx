import { useContext } from "react";

import "./ItemCard.css";
import likeButton from "../../assets/like-button.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const id = item._id;
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked = item.likes.includes(currentUser._id) ? true : false;

  console.log("ItemCard data check:", {
    item: item,
    itemLikes: item?.likes,
    currentUser: currentUser,
  });

  const handleCardClick = () => {
    onCardClick(item);
  };
  const handleCardLike = () => {
    onCardLike({ id, isLiked });
  };
  return (
    <div className="item-card__container ">
      <h2 className="item-card__title">{item.name}</h2>
      <button className="item-card__like-button">
        <img
          className="item-card__like-button-img"
          src={likeButton}
          alt="Like"
          onClick={handleCardLike}
        />
      </button>
      <img
        onClick={handleCardClick}
        className="item-card__img"
        src={item.imageUrl}
        alt={item.name}
      />
    </div>
  );
}

export default ItemCard;
