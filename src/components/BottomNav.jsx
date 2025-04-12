import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/mHome.svg";
import SearchIcon from "../assets/mSearch.svg";
import ExploreIcon from "../assets/mExplore.svg";
import ReelsIcon from "../assets/mReels.svg";
import MessagesIcon from "../assets/mMessages.svg";
import ProfileIcon from "../assets/mProfile.svg";
import "./NavBar.css";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="nav-item">
        <img src={HomeIcon} alt="Home" />
      </NavLink>
      <NavLink to="/search" className="nav-item">
        <img src={SearchIcon} alt="Search" />
      </NavLink>
      {/* <NavLink to="/mexplore" className="nav-item">
        <img src={ExploreIcon} alt="Explore" />
      </NavLink> */}
      <NavLink to="/reels" className="nav-item">
        <img src={ReelsIcon} alt="Reels" />
      </NavLink>
      <NavLink to="/messages" className="nav-item">
        <img src={MessagesIcon} alt="Messages" />
      </NavLink>
      <NavLink to="/profile" className="nav-item">
        <img src={ProfileIcon} alt="Profile" />
      </NavLink>
    </nav>
  );
};

export default BottomNav;
