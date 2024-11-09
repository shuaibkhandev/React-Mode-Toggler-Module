import React from "react";
import logo from "../assets/react.svg";

export default function Navbar({darkMode, toggleDarkMode}){
    return (
        <nav className={darkMode ? "dark" : ""}>
        <img src={logo} alt="my-logo" />
        <h3 className="nav-logo-text">ReactFacts</h3>
        <div className="toggler" onClick={toggleDarkMode}>
          <p className="toggler-light">Light</p>
          <div className="toggler-slider">
            <div className="toggler-slider-circle"></div>
          </div>
          <p className="toggler-dark">Dark</p>
        </div>
      </nav>
    )
}