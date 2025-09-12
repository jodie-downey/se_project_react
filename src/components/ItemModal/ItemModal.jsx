import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./ItemModal.css";
import closeButton from "../../assets/preview-close.svg";

function ItemModal({ activeModal, card, handleCloseClick, handleDelete }) {
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = () => {
    const ownerID =
      typeof card.owner === "string" ? card.owner : card.owner?._id;
    return ownerID === currentUser._id;
  };

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
          {currentUser && isOwn() && (
            <button className="modal__delete-button" onClick={handleDelete}>
              Delete item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
