import React from "react";
import "./Card.css";
import oval from "../../assets/oval.png";

function Card(props) {
  return (
    <div className="card bg-white my-10 p-5 flex">
      <img src={oval} alt="oval" className="pr-6 pb-10" />
      <div className="pt-2 pr-2">
        <h2 className="cardHeading pb-5">{props.heading}</h2>
        <p className="cardParagraph ">{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Card;
