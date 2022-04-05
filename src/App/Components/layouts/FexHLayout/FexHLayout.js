import React from "react";
import PropTypes from "prop-types";
import style from "./FexHLayout.module.css";

const FexHLayout = (props) => {
  return (
    <div className={style.FexHLayout} data-testid="FexHLayout">
     {props.children}
    </div>
  );
};
FexHLayout.propTypes = {
  children:PropTypes.any.isRequired,
};
FexHLayout.defaultProps = {
  children:<div>Children absents</div>
};

export default FexHLayout;