import { NavLink } from "react-router-dom";
import InstagramLogo from "../assets/instagram-logo.png";
import CreateIcon from "../assets/mCreate.svg";
import NotificationsIcon from "../assets/mNotifications.svg";
import "./NavBar.css";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <NavLink to="/">
      <img src={InstagramLogo} alt="Instagram" className="top-nav-logo" />
      </NavLink>
      <div className="top-nav-icons">
        <NavLink to="/create" className="nav-item">
          <img src={CreateIcon} alt="Create" />
        </NavLink>
        <NavLink to="/notifications" className="nav-item">
          <img src={NotificationsIcon} alt="Notifications" />
        </NavLink>
      </div>
    </nav>
  );
};

export default TopNav;
