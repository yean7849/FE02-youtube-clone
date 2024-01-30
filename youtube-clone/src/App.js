import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Homebutton from "./components/Homebutton";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import VideoList from "./components/VideoList";

function App() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  };

  const authenticationContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const authenticationItemStyle = {
    marginLeft: "10px",
  };

  return (
    <Router>
      <div style={containerStyle}>
        <div>
          <Homebutton />
        </div>
        <div>
          <SearchBar />
        </div>

        <div style={authenticationContainerStyle}>
          <SignUp style={authenticationItemStyle} />
          <Login style={authenticationItemStyle} />
        </div>
      </div>
      <div>
        <VideoList />
      </div>
      <Routes></Routes>
    </Router>
  );
}

export default App;
