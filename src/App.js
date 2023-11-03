import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import DataGrid from "./Components/DataGrid/DataGrid";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [group, setGroup] = useState(localStorage.getItem("group") || "status");
  const [order, setOrder] = useState(
    localStorage.getItem("order") || "priority"
  );
  const getTickets = async () => {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await response.json();
    setTickets(data.tickets);
    setUsers(data.users);
  };
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <div className="App">
      <Navbar
        setOrder={setOrder}
        setGroup={setGroup}
        order={order}
        group={group}
      />
      <DataGrid tickets={tickets} users={users} order={order} group={group} />
    </div>
  );
}

export default App;
