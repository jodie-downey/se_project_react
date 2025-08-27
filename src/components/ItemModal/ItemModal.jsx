import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./ItemModal.css";
import closeButton from "../../assets/preview-close.svg";

function ItemModal({ activeModal, card, handleCloseClick, handleDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;

  return (
    <div
      onClick={handleCloseClick}
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
    >
      <div
        className="modal__content-item-preview "
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className="modal__close-button">
          <img onClick={handleCloseClick} src={closeButton} alt="Close" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__text-container">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          {isOwn && (
            <button onClick={handleDelete} className="modal__delete-button">
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
