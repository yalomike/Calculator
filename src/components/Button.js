import React from "react";
import "../stylesheet/Button.css";

function Button(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`button-container 
      ${isOperator(props.children) ? "operator" : ""}`.trimEnd()}
      onClick={() => props.manageClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
