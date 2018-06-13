import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
     
    <span className="clickedCard" onClick={() =>
      props.handleClick(props.id)} ></span>
  
   </div>
);

export default GameCard;
