import PropTypes from "prop-types";
import { useContext } from "react";

import { Context } from "../FormStore";
import style from "./errorMessage.module.scss";

const ErrorMessage = ({ textError }) => {
  const [state] = useContext(Context);
  return <div className={style[state.theme]}>{textError}</div>;
};

export default ErrorMessage;

ErrorMessage.propTypes = {
  textError: PropTypes.string.isRequired,
};
