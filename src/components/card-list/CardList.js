import React from "react";
import Card from "../card/Card";
import "./card-list.styles.css";
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {Array.isArray(monsters) &&
        monsters.map((val, i) => {
          return <Card monster={val} key={val.name + i} />;
        })}
    </div>
  );
};

export default CardList;
