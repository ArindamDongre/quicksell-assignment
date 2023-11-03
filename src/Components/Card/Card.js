import React from "react";
import {
  FaEllipsis,
  FaPlus,
  FaUser,
  FaCircle,
  FaTriangleExclamation,
  FaCircleCheck,
} from "react-icons/fa6";
import {
  PiCellSignalFullFill,
  PiCellSignalMediumFill,
  PiCellSignalLowFill,
} from "react-icons/pi";
import { BsCircle } from "react-icons/bs";
import { TbProgressCheck, TbCircleDotted } from "react-icons/tb";
import { GiCancel } from "react-icons/gi";
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
          {prop.group !== "status" && (
            <div className="icon">{prop.statusIcons[prop.details.status]}</div>
          )}
          <div className="title">{prop.details.title}</div>
        </div>
        <div className="footer">
          {prop.group !== "priority" && (
            <div className="icon">
              {prop.priorityIcons[prop.details.priority]}
            </div>
          )}
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
