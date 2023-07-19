import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [ShowMenue, setShowMenue] = useState(true);
  const toogleMenue = () => {
    setShowMenue((ShowMenue) => !ShowMenue);
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} className="img-fluid" alt="logo" />
        <h4>Amazone</h4>
      </div>
      <div className="right">
        <div className="menue-icon" onClick={toogleMenue}>
          <GoThreeBars />
        </div>

        <ul
          className="list"
          style={{ display: ShowMenue ? "inherit" : "none" }}
        >
          <li>Collections</li>
          <li>Brands</li>
          <li> New</li>
          <li> Sales</li>
          <li>ENG</li>
        </ul>

        <input type="text" className="search" placeholder="search" />
        <BsFillCartCheckFill className="cart" />
      </div>
    </div>
  );
};

export default Header;

//
