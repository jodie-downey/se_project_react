import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";

function LoginModal({
  isOpen,
  activeModal,
  handleCloseClick,
  onLoginModalSubmit,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginModalSubmit({ password, email });
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "signin"}
      title="Sign in"
      buttonText="Signin"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="modal__label modal__label-text-box">
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="email"
          placeholder="Email"
          required
          minLength="1"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="password" className="modal__label modal__label-text-box">
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="password"
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
