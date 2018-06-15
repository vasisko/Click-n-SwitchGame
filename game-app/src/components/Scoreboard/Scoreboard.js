import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (

<div className="scoreboard">
    <div className="row">
        <div className="col">
            <h2>Score: {props.score} </h2>
        </div>
        <div className="col">
            <h2 >Top Score: {props.topscore}</h2>
        </div>
    </div>
</div>);

export default Scoreboard;