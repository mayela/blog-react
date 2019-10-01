import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <h1 className="header-title">
        Bienvenido al blog personal de {props.name}
      </h1>
    </header>
  );
}

export default Header;
