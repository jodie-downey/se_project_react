import "./SideBar.css";

import avatar from "../../assets/wtwr-avatar.svg";

function SideBar({ handleLogoutClick }) {
  return (
    <div className="sidebar__container">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__username">User Name</p>
      <button className="sidebar__change-profile" type="button">
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
