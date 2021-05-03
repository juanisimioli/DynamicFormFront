import PropTypes from "prop-types";

import classNames from "classnames";
import { useContext } from "react";

import { Context } from "../../FormStore";

import CircleErrorInput from "../CircleErrorInput/CircleErrorInput";

import style from "./inputField.module.scss";

const InputField = ({ item, error }) => {
  const [state, dispatch] = useContext(Context);

  return (
    <>
      <input
        className={classNames(
          style.input,
          error && style.error,
          style[state.theme]
        )}
        placeholder={item.placeholder}
        onChange={(e) =>
          dispatch({
            type: "UPDATE_FIELD",
            payload: { [item.slug]: e.target.value },
          })
        }
        value={state[item.slug]}
        onBlur={() => dispatch({ type: "ADD_DIRTY_FIELD", payload: item.slug })}
      />

      <CircleErrorInput error={error} />
    </>
  );
};

export default InputField;

InputField.propTypes = {
  item: PropTypes.object,
  error: PropTypes.string,
};
