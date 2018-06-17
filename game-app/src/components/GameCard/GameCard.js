import React from "react";
import "./GameCard.css";

const GameCard = props => (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card" onClick={() =>
        props.handleClick(props.id)}>
        <div className="img-container">
           <img alt={props.name} src={props.image} />
        </div>
  
      </div>
   </div>
);

export default GameCard;
