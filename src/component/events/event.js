import React from "react";
import style from "./event.module.css";

import twich from "../../assets/logo-twitch.svg";
import youtube from "../../assets/logo-youtube.svg";
import instagram from "../../assets/logo-instagram.svg";
import facebook from "../../assets/logo-facebook.svg";
import twitter from "../../assets/logo-twitter.svg";
import eventImage from "../../assets/gold-fornite.jpg";

const Event = props => {
  return (
    <div className={style.EventContainer}>
      <div className={style.EventLive}>
        <div>
          <p>Live</p>
        </div>
        <div>
          <img src={twich} />
        </div>
        <div>
          <img src={youtube} />
        </div>
      </div>
      <div className={style.EventImgTxt}>
        <div>
          <img src={eventImage}></img>
        </div>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal.
        </p>
      </div>
      <div className={style.EventSocialMedia}>
        <div>
          <p>Follow us</p>
        </div>
        <div>
          <img src={instagram} />
        </div>
        <div>
          <img src={facebook} />
        </div>
        <div>
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};
export default Event;
