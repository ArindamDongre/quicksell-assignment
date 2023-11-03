import React, { useState } from "react";
import { FaAngleDown, FaAlignJustify } from "react-icons/fa6";
import "./Navbar.css";

function Navbar(prop) {
  const [isSelect, setIsSelect] = useState(false);

  const handleGroupChange = (e) => {
    localStorage.setItem("group", e.target.value);
    prop.setGroup(e.target.value);
    setIsSelect(false);
  };

  const handleOrderChange = (e) => {
    localStorage.setItem("order", e.target.value);
    prop.setOrder(e.target.value);
    setIsSelect(false);
  };

  return (
    <div className="navigation-bar">
      <div className="nav-btn-container">
        <button className="nav-btn" onClick={() => setIsSelect(!isSelect)}>
          <FaAlignJustify className="nav-icon" />
          <span>Display</span>
          <FaAngleDown className="nav-icon" />
        </button>
        {isSelect && (
          <div className="drop-down">
            <div className="g-g">
              <span>Grouping</span>
              <select
                value={prop.group}
                onChange={handleGroupChange}
                className="s-style"
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="o-o">
              <span>Ordering</span>
              <select
                value={prop.order}
                onChange={handleOrderChange}
                className="s-style"
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
