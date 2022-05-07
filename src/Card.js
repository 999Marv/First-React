import React from "react";

const Card = function (props) {
  return (
    <div className="card grow">
      <img alt="pokemon" src={props.img} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.type}</p>
      </div>
    </div>
  );
};

export default Card;
