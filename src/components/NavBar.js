import React, { useState, useRef } from "react";
import "./styles.css";
import  profile_pic  from "../images/profile_pic.png";
const NavBar = () => {
  const [hamburger, setHamburger] = useState(true);
  const handleClick = () => {
    if (hamburger) {
      setHamburger(false);
      smallMenu.current.classList.add("active");
      hamburgerRef.current.classList.remove("active");
      closeHamRef.current.classList.add("active");
    } else {
      setHamburger(true);
      smallMenu.current.classList.remove("active");
      hamburgerRef.current.classList.add("active");
      closeHamRef.current.classList.remove("active");
    }
  };

  const hamburgerRef = useRef(null);
  const closeHamRef = useRef(null);
  const smallMenu = useRef(null);

  return (
    <>
      <header>
        <div className="container">
          <div className="nav_left">
            <img className="nav_img" src={profile_pic} alt="navimg" />
            <a href="/">SHUBHAM GUPTA</a>
          </div>
          <nav className="nav_right">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">ABOUT</a>
              </li>
              <li>
                <a href="/">PROJECTS</a>
              </li>
              <li>
                <a href="/">CONTACT</a>
              </li>
            </ul>
            <div className="nav_buttons">
              <img
                onClick={handleClick}
                className="hamburger active"
                src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg"
                alt="hamburger"
                ref={hamburgerRef}
              />
              <img
                onClick={handleClick}
                className="closed_hamburger"
                src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg"
                alt="close menu"
                ref={closeHamRef}
              />
            </div>
          </nav>
        </div>
        <div className="small_menu" ref={smallMenu}>
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ABOUT</a>
            </li>
            <li>
              <a href="/">PROJECTS</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
