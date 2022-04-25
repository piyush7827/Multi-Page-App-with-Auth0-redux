import React from "react";

import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
// import Login from "./Login";
// import { useAuth0 } from "@auth0/auth0-react";

function App() {
  // const { user } = useAuth0();
  return (
    <div className="app">
      {/* <Login /> */}

      <BrowserRouter>
        <Nav />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* {!user ? (
        <Login />
      ) : (
        <BrowserRouter>
          <Nav />
          <div className="app-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </BrowserRouter>
      )} */}
    </div>
  );
}

export default App;
