import { useContext } from "react";

import "./ItemCard.css";
import likeButtonFilled from "../../assets/like-button-filled.svg";
import likeButton from "../../assets/like-button.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemCard({ item, onCardClick, onCardLike }) {
  const id = item._id;
  const { currentUser } = useContext(CurrentUserContext);
  const isLiked =
    currentUser &&
    currentUser._id &&
    item.likes.some((id) => id === currentUser._id);

  const handleCardClick = () => {
    onCardClick(item);
  };
  const handleCardLike = () => {
    onCardLike({ id, isLiked });
  };
  return (
    <div className="item-card__container ">
      <h2 className="item-card__title">{item.name}</h2>
      {currentUser ? (
        <button className="item-card__like-button">
          {isLiked ? (
            <img
              className="item-card__like-button-img"
              src={likeButtonFilled}
              alt="Like"
              onClick={handleCardLike}
            />
          ) : (
            <img
              className="item-card__like-button-img"
              src={likeButton}
              alt="Like"
              onClick={handleCardLike}
            />
          )}
        </button>
      ) : null}
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
