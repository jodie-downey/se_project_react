import { useState, useContext, useEffect } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function EditProfileModal({
  isOpen,
  activeModal,
  handleCloseClick,
  onEditProfileModalSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen && currentUser) {
      setUsername(currentUser.name);
      setAvatar(currentUser.avatar);
    }
  }, [isOpen, currentUser]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditProfileModalSubmit({ name, avatar });
    setUsername("");
    setAvatar("");
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "edit"}
      title="Change profile data"
      buttonText="Save changes"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="edit-profile-name"
        className="modal__label modal__label-text-box"
      >
        Name{""}
        <input
          type="string"
          className="modal__input"
          placeholder={name}
          id="edit-profile-name"
          required
          onChange={handleUsernameChange}
          value={name}
        />
      </label>
      <label
        htmlFor="edit-profile-avatar"
        className="modal__label modal__label-text-box"
      >
        Avatar{""}
        <input
          type="url"
          className="modal__input"
          placeholder={avatar}
          id="edit-profile-avatar"
          required
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}

export default EditProfileModal;
