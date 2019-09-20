import React from "react";

function Footer(props) {
  return (
    <footer>
      <a href={"mailto:" + props.email}>Mi correo</a>
    </footer>
  );
}

export default Footer;
