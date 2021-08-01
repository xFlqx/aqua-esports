import React from "react";
import Slider from "react-slick";
import style from "./header.module.css";
import About from "../about/about";
import Events from "../events/events";
import Owner from "../../component/owner/owner";
import Footer from "../../component/footer/footer";

import forniteTeam from "../../assets/fornite-team.jpeg";
import fifa from "../../assets/fifa-2.png";
import fornite from "../../assets/fornite-blue-darker.png";
import title from "../../assets/your-esport-team.png";
//<img src={fornite} alt="fornite" />

const Header = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };
  return (
    <React.Fragment>
      <header>
        <div className={style.HeaderContainer}>
          <div>
            <Slider {...settings}>
              <div>
                <img src={fifa} alt="fifa" />
              </div>
              <div>
                <img src={fornite} alt="fortnite" />
              </div>
              <div>
                <img src={forniteTeam} alt="fortniteteam" />
              </div>
            </Slider>
          </div>
        </div>
        <div className={style.MainTitle}>
          <img src={title} alt="title" />
          <h1>Your Esport Squad</h1>
        </div>
      </header>
      <About />
      <Events />
      <Owner />
      <Footer />
    </React.Fragment>
  );
};

export default Header;

// const settings = {
//   dots: false,
//   arrows: false,
//   infinite: true,
//   pauseOnHover: false,
//   speed: 500,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   slidesToShow: 1,
//   slidesToScroll: 1
// };
// <Slider {...settings}>
//   <div>
//     <img src={fornite} />
//   </div>
//   <div>
//     <img src={fifa} />
//   </div>
// </Slider>
