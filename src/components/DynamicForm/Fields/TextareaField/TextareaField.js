import PropTypes from "prop-types";
import classNames from "classnames";

import { Context } from "../../FormStore";
import { useContext } from "react";

import TextareaAutosize from "react-autosize-textarea";
import CircleErrorInput from "../CircleErrorInput/CircleErrorInput";

import style from "./textareaField.module.scss";

const TextareaField = ({ item, error }) => {
  const [state, dispatch] = useContext(Context);

  return (
    <>
      <TextareaAutosize
        className={classNames(
          style.textarea,
          style[state.theme],
          error && style.error
        )}
        placeholder={item.placeholder}
        value={state[item.slug]}
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

export default TextareaField;

TextareaField.propTypes = {
  error: PropTypes.string,
  item: PropTypes.object,
};
