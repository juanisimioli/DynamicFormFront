import PropTypes from "prop-types";
import classNames from "classnames";
import { useContext } from "react";
import { Context } from "../../FormStore";

import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { errorMessage } from "../../helper/checkErrorField";

import style from "./checkboxField.module.scss";

const CheckboxField = ({ item }) => {
  const { text, slug } = item;
  const [state, dispatch] = useContext(Context);

  const textError = errorMessage(item, state);

  return (
    <div className={classNames(style.container, style[state.theme])}>
      <div className={style.lineCheckbox}>
        <label className={style.checkbox}>
          <input
            type="checkbox"
            className={style.checkbox}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_FIELD",
                payload: { [slug]: e.target.checked },
              })
            }
            checked={state[item.slug]}
          />
        </label>
        <div
          className={style.text}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <ErrorMessage textError={textError} />
    </div>
  );
};

export default CheckboxField;

CheckboxField.propTypes = {
  item: PropTypes.object,
};
