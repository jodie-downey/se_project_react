import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./RegisterModal.css";

function RegisterModal({
  isOpen,
  activeModal,
  handleCloseClick,
  onRegisterModalSubmit,
}) {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterModalSubmit({ name, password, email, avatar });
    setAvatar("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "signup"}
      title="Sign up"
      buttonText="Next"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="register-profile-email"
        className="modal__label modal__label-text-box"
      >
        Email{""}
        <input
          type="email"
          className="modal__input"
          id="register-profile-email"
          placeholder="Email"
          required
          minLength="1"
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label
        htmlFor="register-profile-password"
        className="modal__label modal__label-text-box"
      >
        Password{""}
        <input
          type="password"
          className="modal__input"
          id="register-profile-password"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label
        htmlFor="register-profile-name"
        className="modal__label modal__label-text-box"
      >
        name{""}
        <input
          type="string"
          className="modal__input"
          id="register-profile-name"
          placeholder="Name"
          required
          onChange={handleUsernameChange}
          value={name}
        />
      </label>
      <label
        htmlFor="register-profile-avatar"
        className="modal__label modal__label-text-box"
      >
        Avatar{""}
        <input
          type="url"
          className="modal__input"
          id="register-profile-avatar"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
