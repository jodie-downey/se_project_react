import { useContext } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SideBar.css";
import avatar from "../../assets/wtwr-avatar.svg";

function SideBar({ handleLogoutClick, handleEditProfileClick }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="sidebar__container">
      <div className="sidebar__container-upper">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar}
          alt="avatar"
        />
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
