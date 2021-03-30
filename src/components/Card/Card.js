import React from "react";
import "./style.css"


function Card(props) {
    return (
      <div className="card-container">
        <div className="card text-center">
          <div className="card-header">
            <h2>{props.heading}</h2>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    );
  }
  
  export default Card;