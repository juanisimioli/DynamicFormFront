import PropTypes from "prop-types";
import classNames from "classnames";
import { useContext } from "react";
import { Context } from "../FormStore";
import styles from "./buttonSubmit.module.scss";

const ButtonSubmit = ({ onClickButton, disabled, children }) => {
  const [state] = useContext(Context);
  return (
    <button
      className={classNames(
        styles.button,
        disabled ? styles.disabled : styles[state.theme]
      )}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};

export default ButtonSubmit;

ButtonSubmit.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
