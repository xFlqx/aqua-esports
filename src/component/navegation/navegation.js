import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./navegation.module.css";

import Logo from "../../assets/small-logo.png";
const Navegation = props => {
  return (
    <nav className={style.Navegation}>
      <div className={style.Logo}>
        <img src={Logo} alt="Nav logo" />
      </div>
      <div className={style.burgerMenuContainer}>
        <div className={style.burgerMenu} />
      </div>
      <ul className={style.menuContainer}>
        <li>
          <Link to="/">Games</Link>
        </li>
        <li>
          <Link to="/">Roster</Link>
        </li>
        <li>
          <Link to="/">Highlights</Link>
        </li>
        <li>
          <Link to="/">Sponsor</Link>
        </li>
        <li>
          <Link to="/">Store</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navegation;
/* \const BurgerMenuAnimation = newStyle.div`

width: 100%;
height: 5px;
background-color: #fff;


&::after {
content: "";
width: 100%;
height: 5px;
position: absolute;
background-color: #fff;
bottom: 0;
}
&::before {
content: "";
width: 100%;
height: 5px;
position: absolute;
background-color: #fff;
top: 50%;
transform: translateY(-50%);
}
${() =>
close
  ? `

&{
animation: background .1s forwards
}

&::before{
animation: rotateBefore .5s forwards;

}
&::after{
animation: rotateAfter .5s forwards;
}
@keyframes background{
0%{background-color:#fff}
100%{background-color:transparent}
}
@keyframes rotateBefore{
0%{transform:rotate(0deg)}
100%{
    top:50%;
    transform:rotate(135deg);}
}
@keyframes rotateAfter{
0%{transform:rotate(0deg)}
100%{ top:50%;
  transform:rotate(-135deg);}
}

`
  : `
  &{
    animation: background .5s forwards
  }
  &::before{
    animation: rotateBefore .5s forwards;
    top:50%;
    translateY(-50%)
  }
  &::after{
    animation: rotateAfter .5s forwards;

  }
  @keyframes background{
    0%{background-color:transparent}
    100%{background-color:#fff}
  }
  @keyframes rotateBefore{
    0%{transform:rotate(135deg) translateY(-50%)}
    100%{
        top:50%;
        transform:rotate(0deg) translateY(-50%);}
  }
  @keyframes rotateAfter{
    0%{transform:rotate(-135deg)}
    100%{ bottom:0;
      transform:rotate(0deg);}
  }
  `}

`; */
