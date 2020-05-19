import React from "react";
import { Link } from "react-router-dom";
import style from "./navegation.module.css";
import Logo from "../../assets/small-logo.png";
const Navegation = props => {
  return (
    <nav className={style.Navegation}>
      <div className={style.Logo}>
        <img src={Logo} />
      </div>
      <div className={style.burgerMenuContainer}>
        <div className={style.burgerMenu}></div>
      </div>
      <ul>
        <li>
          <a href="#">Games</a>
        </li>
        <li>
          <a href="#">Roster</a>
        </li>
        <li>
          <a href="#">Highlights</a>
        </li>
        <li>
          <a href="#">Sponsor</a>
        </li>
        <li>
          <a href="#">Store</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navegation;
