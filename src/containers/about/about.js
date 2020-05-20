import React from "react";
import style from "./about.module.css";
import Splash from "../../assets/splash.png";
//import video from "../../assets/Aqua-Intro.mp4";
import BigSplash from "../../assets/big-splash-2.png";
const About = props => {
  return (
    <section className={style.about}>
      <div className={style.aboutQuote}>
        <h2>
          We are not just any team, we are family driven by the same passion.
        </h2>
      </div>
      <div className={style.smallSplash}>
        <img src={Splash} alt="small splash" />
      </div>
      <div className={style.aboutVideo}>
        <p>"You play it. We live it"</p>
        {/* <video
          src={video}
          controls="controls"
          muted
          //autoplay="true"
        /> */}
      </div>
      <div className={style.aboutContainer}>
        <div className={style.aboutTitle}>
          <h3>About us</h3>
        </div>
        <div>
          <p>
            Team Aqua is an upcoming eSports team based in Curaçao Our main goal
            is to help find talented players and open opportunities for them.
            Our community is the most important aspect of the team. The amount
            of support that were recently receiving is tremendous and is a
            stimulant for us to keep working harder on the team. We organize
            scrims and tournaments on a weekly basis so we can promote hidden
            talent and give back to the community.
          </p>
        </div>
      </div>
      <div className={style.bigSplash}>
        <img src={BigSplash} alt="big splash" />
      </div>
    </section>
  );
};
export default About;
