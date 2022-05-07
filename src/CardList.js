import React from "react";
import Card from "./Card";

const Cardlist = function ({ pokemon }) {
  const cardsArray = pokemon.map((poke, i) => {
    return (
      <Card 
      key= {i} 
      id={pokemon[i].id} 
      name={pokemon[i].name} 
      img={pokemon[i].img} 
      type={pokemon[i].type}
      />
    );
  });

  return <div>{cardsArray}</div>;
};

export default Cardlist;
