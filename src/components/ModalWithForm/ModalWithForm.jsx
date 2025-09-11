import "./ModalWithForm.css";
import closeButton from "../../assets/modal-close.svg";
import { useId } from "react";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  handleCloseClick,
  isOpen,
  onSubmit,
  footerContent,
}) {
  const FormId = useId();
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
        <form onSubmit={onSubmit} className="modal__form" id={FormId}>
          {children}
        </form>
        <div className="modal__button-container">
          <button type="submit" className="modal__submit" form={FormId}>
            {buttonText}
          </button>
          {footerContent && (
            <div className="modal__footer">{footerContent}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;
