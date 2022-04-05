import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
function Button(props) {
  //State management
  const [clicked, setClicked] = useState(false);
  //Change detection on clicked
  useEffect(()=>{
    if(clicked){
        setTimeout(() => {
            setClicked(false);
        }, 700);
    }
  }, [clicked]);
  //did mount event
  useEffect(()=>{
      console.log('Le composent est monté')
  }, []);

  return (
    <button
      className={`${style.Button}${clicked ? " " + style.clicked : ""}`}
      type={props.type}
      style={{
        ...props.style,
        backgroundColor: props.bgColor,
        color: props.color,
      }}
      onClick={(args) => {
        setClicked(true);
        props.clickEvent("hello");
      }}
    >
      {props.text}
      <br />
      {props.children}
      <br />
      {clicked ? "Clicked" : "Unclicked"}
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
