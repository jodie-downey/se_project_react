import "./Header.css";

import Logo from "../../assets/wtwr-logo.svg";
import AvatarPlaceholder from "../../assets/wtwr-avatar.svg";
import menu from "../../assets/menu.svg";

function Header({ handleAddButtonClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo-menu-container">
        <img className="header__logo" src={Logo} alt="logo" />
        <img className="header__menu" src={menu} alt="menu" />
      </div>
      <p className="header__date-and-location">
        {currentDate} and {weatherData?.city || "Loading..."}
      </p>
      <button
        className="header__add-clothes-button"
        type="button"
        onClick={handleAddButtonClick}
      >
        + Add clothes
      </button>
      <div className="header__user-container">
        <p className="header__username">NAME</p>
        <img
          className="header__avatar"
          src={AvatarPlaceholder}
          alt="avatar placeholder"
        />
      </div>
    </header>
  );
}

export default Header;
