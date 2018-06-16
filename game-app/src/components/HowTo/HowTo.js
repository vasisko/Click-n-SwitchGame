import React from "react";
import "./HowTo.css";

const HowTo = props => (
<div className="grid">
<p className="howto">{props.children}</p>
</div>);

export default HowTo;
