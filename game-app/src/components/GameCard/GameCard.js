import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div className="col">
      <div className="card" onClick={() =>
        props.handleClick(props.id)}>
        <div className="img-container">
           <img alt={props.name} src={props.image} />
        </div>
  
      </div>
   </div>
);

export default GameCard;
