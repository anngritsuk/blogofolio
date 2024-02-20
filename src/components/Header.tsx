import React, { FC } from "react";
import "../styles/Header.css";
import menu from "../assets/menu.png";
import search from "../assets/search.png";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__right-part">
        <img src={menu} alt="menu" className="header-icon" />
      </div>
      <div className="header__left-part">
        <div className="header__right-part">
          <img src={search} alt="search" className="header-icon" />
        </div>
        <div className="header__person-name">Name</div>
      </div>
    </div>
  );
};

export default Header;
