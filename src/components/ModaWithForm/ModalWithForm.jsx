import "./ModalWithForm.css";
import closeButton from "../../assets/modal-close.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  handleCloseClick,
  isOpen,
}) {
  return (
    <div
      onClick={handleCloseClick}
      className={`modal ${isOpen ? "modal_opened" : ""}`}
    >
      <div className="modal__content" onClick={(evt) => evt.stopPropagation()}>
        <h1 className="modal__title">{title}</h1>
        <button className="modal__close-button">
          <img onClick={handleCloseClick} src={closeButton} alt="Close" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
