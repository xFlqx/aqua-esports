import React from "react";
import style from "./about.module.css";
import Splash from "../../assets/splash.png";
const About = props => {
  return (
    <section className={style.about}>
      <div className={style.aboutQuote}>
        <h2>
          We are not just any team, we are family driven by the same passion.
        </h2>
      </div>
      <div className={style.smallSplash}>
        <img src={Splash} />
      </div>
      <div className={style.aboutVideo}></div>
    </section>
  );
};
export default About;
