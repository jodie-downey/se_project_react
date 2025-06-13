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

  const handlenameChange = (e) => {
    setName(e.target.value);
    // setIsValid(
    //   e.target.value.length > 0 && imageURL.checkValidity() && weather !== ""
    // );
  };

  const handleimageURLChange = (e) => {
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
      <label htmlFor="name" className="modal__label modal__label-text-box">
        Name{""}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="20"
          onChange={handlenameChange}
          value={name}
        />
      </label>
      <label htmlFor="imageURL" className="modal__label modal__label-text-box">
        Image{""}
        <input
          type="url"
          className="modal__input"
          id="imageURL"
          placeholder="Image URL"
          required
          onChange={handleimageURLChange}
          value={imageUrl}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label-radio">
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="weather-filter"
            value="hot"
            onChange={handleWeatherChange}
            checked={weather === "hot"}
          />
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label-radio">
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="weather-filter"
            value="warm"
            onChange={handleWeatherChange}
            checked={weather === "warm"}
          />
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label-radio">
          <input
            id="cold"
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
