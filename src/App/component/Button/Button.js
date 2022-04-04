import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
function Button(props) {
  return (
    <button
      className={style.Button}
      type={props.type}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      onClick={(args) => {
        props.clickEvent("hello");
      }}
    >
      {props.text}
      <br />
      {props.children}
    </button>
  );
}
Button.protoTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};
Button.defaultProps = {
  clickEvent: () => {
    console.warn("Fonction non fournie");
  },
  bgColor: "cornflowerblue",
  type: "button",
  color: "white",
};
export default Button;
