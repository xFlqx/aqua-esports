import React from "react";
import style from "./footer.module.css";
import instagram from "../../assets/logo-instagram.svg";
import facebook from "../../assets/logo-facebook.svg";
import twitter from "../../assets/logo-twitter.svg";

const Footer = props => {
  return (
    <section className={style.Footer}>
      <div className={style.socialMedia}>
        <div>
          <p>Follow us</p>
        </div>
        <div>
          <img src={instagram} alt="instagram logo" />
        </div>
        <div>
          <img src={facebook} alt="facebook logo" />
        </div>
        <div>
          <img src={twitter} alt="twitter logo" />
        </div>
      </div>
      <div className={style.footerNav}>
        <ul>
          <li>Contact</li>
          <li>Announcement</li>
          <li>Games</li>
          <li>Roster</li>
          <li>Sponsor</li>
          <li>store</li>
        </ul>
      </div>
      <div className={style.copyRight}>
        <p>&copy; Aqua Team. rights Reserved</p>
      </div>
    </section>
  );
};
export default Footer;
