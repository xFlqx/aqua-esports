import React from "react";
import style from "./events.module.css";
import Event from "../../component/event/event";
const Events = props => {
  return (
    <section className={style.Events}>
      <h3>Upcomming Events</h3>
      <Event />
      <Event />
      <Event />
    </section>
  );
};
export default Events;
