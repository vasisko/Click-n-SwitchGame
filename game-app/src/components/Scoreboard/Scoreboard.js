import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (

<div className="scoreboard">
    <div className="row">
        <div className="col-6">
            Score: {props.score}
        </div>
        <div className="col-6">
            Top Score: {props.topscore}
        </div>
    </div>
</div>
);

export default Scoreboard;