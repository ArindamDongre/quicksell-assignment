import React from "react";
import { FaCircle, FaUser } from "react-icons/fa6";
import "./Card.css";
function Card(prop) {
  return (
    <div className="card-container">
      <div className="card-box">
        <div className="header">
          <p> {prop.details.id} </p>
          {prop.group !== "userId" && <FaUser />}
        </div>
        <div className="content">
          <div className="icon">
            <FaUser />
          </div>
          <div className="title">{prop.details.title}</div>
        </div>
        <div className="footer">
          <div className="icon">
            <FaUser />
          </div>
          <div className="tag">
            <FaCircle className="circle" />
            {prop.details.tag}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
