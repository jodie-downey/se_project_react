import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  isOpen,
  activeModal,
  handleCloseClick,
  onLoginModalSubmit,
  handleSignupButtonClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ password, email });
  };

  const toggleButton = (
    <button
      type="button"
      className="modal__toggle-button"
      onClick={handleSignupButtonClick}
    >
      or Sign Up
    </button>
  );

  return (
    <ModalWithForm
      isOpen={activeModal === "signin"}
      title="Sign in"
      buttonText="Signin"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
      handleSignupButtonClick={handleSignupButtonClick}
      footerContent={toggleButton}
    >
      <label
        htmlFor="login-profile-email"
        className="modal__label modal__label-text-box"
      >
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="login-profile-email"
          placeholder="Email"
          required
          minLength="1"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label
        htmlFor="login-profile-password"
        className="modal__label modal__label-text-box"
      >
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="login-profile-password"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
