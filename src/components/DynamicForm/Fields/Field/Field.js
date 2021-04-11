import PropTypes from "prop-types";
import classNames from "classnames";
import useMedia from "use-media";

import { Context } from "../../FormStore";
import { useContext } from "react";
import { errorMessage } from "../../helper/checkErrorField";

import InputField from "../InputField/InputField";
import SelectField from "../SelectField/SelectField";
import TextareaField from "../TextareaField/TextareaField";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import style from "./field.module.scss";

const Field = ({ item, className }) => {
  const { label, isRequired, isHalfSizeOnDektop } = item;
  const isMobile = useMedia({ minWidth: 768 });
  const [state] = useContext(Context);

  const textError = errorMessage(item, state);

  function typeField() {
    switch (item.type) {
      case "text":
        return <InputField item={item} error={textError} />;
      case "select":
        return <SelectField item={item} error={textError} />;
      case "textarea":
        return <TextareaField item={item} error={textError} />;
      default:
        return null;
    }
  }

  return (
    <div
      className={classNames(
        style.container,
        isMobile && isHalfSizeOnDektop && style.isHalfSizeOnDektop,
        className,
        style[state.theme]
      )}
    >
      <label
        className={classNames(style.label, style[state.theme])}
      >{`${label}${isRequired ? " *" : ""}`}</label>

      {typeField()}
      <ErrorMessage textError={textError} />
    </div>
  );
};

export default Field;

Field.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};
