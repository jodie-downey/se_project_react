import "./SideBar.css";

import avatar from "../../assets/wtwr-avatar.svg";

function SideBar() {
  return (
    <div className="sidebar__container">
      <img className="sidebar__avatar" src={avatar} alt="avatar" />
      <p className="sidebar__username">User Name</p>
    </div>
  );
}

export default SideBar;
