import React from "react";
import "./Dashboard.css";

import Card from "./Card";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="dashboard">
      <h1>This is Dashboard</h1>
      <button onClick={navigateToHome}>Go to home</button>
      <div className="dashboard-cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Dashboard;
