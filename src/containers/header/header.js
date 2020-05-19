import React from "react";
//import Slider from "react-slick";
import style from "./header.module.css";
//import style from "styled-components";
//import fifa from "../../assets/fifa-2.png";
import fornite from "../../assets/fornite-blue-darker.png";
import title from "../../assets/your-esport-team.png";

const Header = props => {
  return (
    <header>
      <div className={style.HeaderContainer}>
        <img src={fornite} />
      </div>
      <div className={style.MainTitle}>
        <img src={title} />
        <h1>Your Esport Squad</h1>
      </div>
    </header>
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
