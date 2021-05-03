import PropTypes from "prop-types";

import { useContext, useRef } from "react";

import { Context } from "../FormStore";

import { isErrorField } from "../helper/checkErrorField";

import Field from "../Fields/Field/Field";
import FileField from "../Fields/FileField/FileField";
import CheckboxField from "../Fields/CheckboxField/CheckboxField";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Captcha from "../Captcha/Captcha";
import LoaderSubmit from "../LoaderSubmit/LoaderSubmit";

import style from "./itemsForm.module.scss";
import { initialState } from "../initialState";

import { formMailSender } from "../../../helper/formMailSender";

function renderInputType(item) {
  switch (item.type) {
    case "text":
      return buildField(item);
    case "select":
      return buildField(item);
    case "textarea":
      return buildField(item);
    case "file":
      return buildFileField(item);
    case "checkbox":
      return buildCheckboxField(item);
    default:
      return null;
  }
}

function buildField(item) {
  return <Field key={item.id} item={item} className={style.field} />;
}

function buildFileField(item) {
  return <FileField key={item.id} item={item} />;
}

function buildCheckboxField(item) {
  return <CheckboxField key={item.id} item={item} />;
}

const ItemsForm = ({ fields, onSuccessSubmit, submitTitle, titleForm }) => {
  const [state, dispatch] = useContext(Context);

  const recaptchaRef = useRef();

  const isReadyToSubmit = () => {
    const ready = fields.filter((field) => {
      return isErrorField(field, state);
    });
    return ready.length === 0;
  };

  const actionOnResponseSubmit = (response) => {
    if (response?.statusCode >= 400 || response?.statusCode === 0) {
      dispatch({ type: "HANDLE_SUBMITTING", payload: false });
      dispatch({
        type: "ERROR_SUBMITTING",
        payload: "Failed to submit, Please try again later.",
      });
      return;
    }
    dispatch({ type: "HANDLE_SUBMITTING", payload: false });

    resetFields();

    onSuccessSubmit && onSuccessSubmit();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_COUNT" });
    dispatch({
      type: "ERROR_SUBMITTING",
      payload: "",
    });

    if (isReadyToSubmit()) {
      dispatch({ type: "HANDLE_SUBMITTING", payload: true });

      const formData = new FormData();

      formData.append("titleForm", titleForm);

      fields.forEach((item) => {
        if (item.type === "select") {
          const selectOption = item.options.find(
            (option) => option.value === state[item.slug].value
          );
          formData.append("OptionSelected", selectOption.value);
          formData.append(item.label, selectOption.label);
        } else if (item.type === "file" && state[item.slug]) {
          formData.append("attachment", state[item.slug][0]);
        } else {
          formData.append(item.label, state[item.slug]);
        }
      });

      const response = await formMailSender(formData);

      actionOnResponseSubmit(response);
    }
  };

  const resetFields = () => {
    recaptchaRef.current.reset();
    const newState = initialState(fields, state.theme);
    dispatch({ type: "RESET_FIELDS", payload: newState });
  };

  if (state == null) {
    return null;
  }

  return (
    <div className={state.isSubmitting ? style.isSubmitting : undefined}>
      <div className={style.container}>
        {fields.map((item) => renderInputType(item))}
        <Captcha recaptchaRef={recaptchaRef} />
      </div>

      <div className={style.submitSection}>
        <ButtonSubmit
          onClickButton={handleSubmit}
          disabled={!isReadyToSubmit()}
        >
          {submitTitle}
        </ButtonSubmit>
        <div className={style.loader}>
          {state.isSubmitting && <LoaderSubmit />}
          {state.errorSubmitting && (
            <div className={style.errorText}>{state.errorSubmitting}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemsForm;

ItemsForm.propTypes = {
  fields: PropTypes.array,
  onSuccessSubmit: PropTypes.func,
  submitTitle: PropTypes.string,
};
