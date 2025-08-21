import { Link } from "react-router-dom";
import { useContext } from "react";

import "./Header.css";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import CurrentUserContext from "../../contexts/CurrentUserContext.jsx";
import Logo from "../../assets/wtwr-logo.svg";
import AvatarPlaceholder from "../../assets/wtwr-avatar.svg";
import menu from "../../assets/menu.svg";

function Header({
  handleSigninButtonClick,
  handleSignupButtonClick,
  handleAddButtonClick,
  weatherData,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const { isLoggedIn } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__logo-menu-container">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="logo" />
        </Link>
        <img className="header__menu" src={menu} alt="menu" />
      </div>
      <p className="header__date-and-location">
        {currentDate} and {weatherData?.city || "Loading..."}
      </p>
      <div className="header__right-container">
        <ToggleSwitch className="header__toggle" />
        {isLoggedIn ? (
          <button
            className="header__add-clothes-button"
            type="button"
            onClick={handleAddButtonClick}
          >
            + Add clothes
          </button>
        ) : (
          <button
            className="header__signup-button"
            type="button"
            onClick={handleSignupButtonClick}
          >
            Sign Up
          </button>
        )}
        <div className="header__user-container">
          {isLoggedIn ? (
            <p className="header__username">NAME</p>
          ) : (
            <button
              type="button"
              className="header__signin-button"
              onClick={handleSigninButtonClick}
            >
              Log in
            </button>
          )}
          {isLoggedIn ? (
            <Link to="/profile">
              <img
                className="header__avatar"
                src={AvatarPlaceholder}
                alt="avatar placeholder"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
