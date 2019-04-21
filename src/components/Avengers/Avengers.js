import React from "react";
import "./Avengers.css";

const Avengers = props => (
  
    <div className="card">
        <img className="card-img-top cardImg" alt="img" src={props.image} onClick={() => props.imgSelect(props.id)}/>
    </div>
  
);

export default Avengers;