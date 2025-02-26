import { useEffect, useState } from "react";
import DesktopNav from "./DesktopNav";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import "./NavBar.css";

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile ? (
        <>
          <TopNav />
          <BottomNav />
        </>
      ) : (
        <DesktopNav />
      )}
    </>
  );
};

export default NavBar;