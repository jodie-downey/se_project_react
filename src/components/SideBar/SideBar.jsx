import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";

function SideBar({ handleLogoutClick, handleEditProfileClick }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  return (
    <div className="sidebar__container">
      <div className="sidebar__container-upper">
        {isLoggedIn ? (
          currentUser.avatar ? (
            <img
              className="sidebar__avatar"
              src={currentUser.avatar}
              alt="avatar placeholder"
            />
          ) : (
            <div className="sidebar__avatar-placeholder">
              {currentUser.name.charAt(0)}
            </div>
          )
        ) : null}
        <p className="sidebar__username">{currentUser.name}</p>
      </div>
      <button
        className="sidebar__change-profile"
        type="button"
        onClick={handleEditProfileClick}
      >
        Change Profile Data
      </button>
      <button
        className="sidebar__logout"
        type="button"
        onClick={handleLogoutClick}
      >
        Log Out
      </button>
    </div>
  );
}

export default SideBar;
