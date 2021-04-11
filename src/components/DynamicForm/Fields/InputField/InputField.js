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
          dispatch({ type: `UPDATE`, payload: { [item.slug]: e.target.value } })
        }
        onBlur={() => dispatch({ type: "ADD_DIRTY_FIELD", payload: item.slug })}
        // onFocus allow to position the cursor at the end of the string inside input field
        onFocus={function (e) {
          var val = e.target.value;
          e.target.value = "";
          e.target.value = val;
        }}
        idform={state.idForm}
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
