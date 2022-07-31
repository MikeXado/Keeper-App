import React from "react";
import "../components/header.scss";
import logo from "../img/header/lightbulb.png";
function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="header-logo">
          <img src={logo} alt="logo" />
          <div className="header-logo__text">Keeper</div>
        </div>
      </div>
    </div>
  );
}

export { Header };
