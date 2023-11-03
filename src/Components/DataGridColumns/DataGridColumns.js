import React from "react";
import "./DataGridColumns.css";
import {
  FaEllipsis,
  FaPlus,
  FaUser,
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
import Card from "../Card/Card";
function DataGridColumns(prop) {
  const priority = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
  };

  const priorityIcons = {
    4: <FaTriangleExclamation />,
    3: <PiCellSignalFullFill />,
    2: <PiCellSignalMediumFill />,
    1: <PiCellSignalLowFill />,
    0: <FaEllipsis />,
  };
  const statusIcons = {
    Todo: <BsCircle />,
    "In progress": <TbProgressCheck />,
    Backlog: <TbCircleDotted />,
    Done: <FaCircleCheck />,
    Cancelled: <GiCancel />,
  };

  let iconDis = <FaUser />;
  if (prop.group === "userId") {
    iconDis = <FaUser />;
  } else if (prop.group === "priority") {
    iconDis = priorityIcons[prop.name];
  } else {
    iconDis = statusIcons[prop.name];
  }

  const func = () => {
    if (prop.group === "userId") {
      return prop.users.find((usr) => usr.id === prop.name).name;
    } else if (prop.group === "priority") {
      return priority[prop.name];
    } else {
      return prop.name;
    }
  };
  const dis = func();

  return (
    <div className="column-container">
      <div className="column-header">
        <div className="column-left">
          {iconDis}
          <span style={{ color: "black" }}>{dis}</span>
          <span>{prop.values.length}</span>
        </div>
        <div className="column-right">
          <FaPlus />
          <FaEllipsis />
        </div>
      </div>
      {prop.values.map((e) => (
        <Card
          details={e}
          group={prop.group}
          priorityIcons={priorityIcons}
          statusIcons={statusIcons}
          name={prop.name}
        />
      ))}
    </div>
  );
}

export default DataGridColumns;
