// DesktopNav.jsx
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import HomeIcon from "../assets/Home.svg";
import SearchIcon from "../assets/Search.svg";
import ExploreIcon from "../assets/Explore.svg";
import ReelsIcon from "../assets/Reels.svg";
import MessagesIcon from "../assets/Messages.svg";
import NotificationsIcon from "../assets/Notifications.svg";
import CreateIcon from "../assets/Create.svg";
import ProfileIcon from "../assets/Profile.svg";
import InstagramLogo from "../assets/instagram-logo.svg";

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <div className="logo">
      <NavLink to="/">
        <img src={InstagramLogo} alt="Instagram" />
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-item"><img src={HomeIcon} alt="Home" /><span>Home</span></NavLink>
        <NavLink to="/search" className="nav-item"><img src={SearchIcon} alt="Search" /><span>Search</span></NavLink>
        <NavLink to="/explore" className="nav-item"><img src={ExploreIcon} alt="Explore" /><span>Explore</span></NavLink>
        <NavLink to="/reels" className="nav-item"><img src={ReelsIcon} alt="Reels" /><span>Reels</span></NavLink>
        <NavLink to="/messages" className="nav-item"><img src={MessagesIcon} alt="Messages" /><span>Messages</span></NavLink>
        <NavLink to="/notifications" className="nav-item"><img src={NotificationsIcon} alt="Notifications" /><span>Notifications</span></NavLink>
        <NavLink to="/create" className="nav-item"><img src={CreateIcon} alt="Create" /><span>Create</span></NavLink>
        <NavLink to="/profile" className="nav-item"><img src={ProfileIcon} alt="Profile" /><span>Profile</span></NavLink>
      </div>
    </nav>
  );
};

export default DesktopNav;