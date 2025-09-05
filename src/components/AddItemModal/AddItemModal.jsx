import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./AddItemModal.css";

function AddItemModal({
  isOpen,
  activeModal,
  handleCloseClick,
  onAddItemModalSubmit,
  newItem,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  // const [isValid, setIsValid] = useState(false);

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
    // setIsValid(
    //   name.length > 0 && imageURL.checkValidity() && e.target.value !== ""
    // );
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // setIsValid(
    //   e.target.value.length > 0 && imageURL.checkValidity() && weather !== ""
    // );
  };

  const handleImageURLChange = (e) => {
    setImageUrl(e.target.value);
    // setIsValid(
    //   name.length > 0 && checkValidity({imageURL}) && weather !== ""
    // );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemModalSubmit({ name, imageUrl, weather });
    setImageUrl("");
    setName("");
    setWeather("");
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "add garment"}
      title="New Garment"
      buttonText="Add garment"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="add-item-name"
        className="modal__label modal__label-text-box"
      >
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="add-item-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="20"
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label
        htmlFor="add-item-imageURL"
        className="modal__label modal__label-text-box"
      >
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="add-item-imageURL"
          placeholder="Image URL"
          required
          onChange={handleImageURLChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label
          htmlFor="add-item-hot"
          className="modal__label modal__label-radio"
        >
          <input
            id="add-item-hot"
            type="radio"
            className="modal__radio-input"
            name="weather-filter"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label
          htmlFor="add-item-warm"
          className="modal__label modal__label-radio"
        >
          <input
            id="add-item-warm"
            type="radio"
            className="modal__radio-input"
            name="weather-filter"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label
          htmlFor="add-item-cold"
          className="modal__label modal__label-radio"
        >
          <input
            id="add-item-cold"
            type="radio"
            className="modal__radio-input"
            name="weather-filter"
            value="cold"
            onChange={handleWeatherChange}
            checked={weather === "cold"}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
