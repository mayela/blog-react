import React from "react";

function Header(props) {
  return (
    <header>
      <h1>Bienvenido al blog personal de {props.name}</h1>
    </header>
  );
}

export default Header;
