import React from "react";
import style from "./owner.module.css";

import ownerImage from "../../assets/owner.jpg";
const Owner = props => {
  return (
    <section className={style.Owner}>
      <img src={ownerImage} />
      <p>
        "We want to connect with people around the world to bring them together
        and do what we all love, playing video games. This family is growing and
        we want you to be part of this family" <br />
        <br />
        KTHEGR8TEST
      </p>
    </section>
  );
};
export default Owner;
