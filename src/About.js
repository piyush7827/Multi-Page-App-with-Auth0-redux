import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>You are routed to the about page</h1>
      <h1>About Us</h1>
      <h1>This is a simple blog</h1>
      <Link to="/">Go to home page</Link>
      <br />
      <br />
      <Link to="/dashboard">Go to dashboard</Link>
    </div>
  );
}

export default About;
