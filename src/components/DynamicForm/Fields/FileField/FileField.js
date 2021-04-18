import PropTypes from "prop-types";
import classNames from "classnames";

import { useContext } from "react";
import { Context } from "../../FormStore";

import { errorMessage } from "../../helper/checkErrorField";

import FileList from "./FileList/FileList";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";

import style from "./fileField.module.scss";

const FileField = ({ item }) => {
  const { text, description, accept } = item;
  const [state, dispatch] = useContext(Context);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { [item.slug]: [...e.target.files] },
    });
  };

  const handleRemoveFile = (e, index) => {
    e.preventDefault();
    const newPayload = [...state[item.slug]];
    newPayload.splice(index, 1);
    dispatch({
      type: "UPDATE_FIELD",
      payload: { [item.slug]: [...newPayload] },
    });

    Array.from(
      document.querySelectorAll(`input[idinput="${item.id}"]`)
    ).forEach((input) => (input.value = ""));
  };

  const textError = errorMessage(item, state);

  return (
    <div className={classNames(style.container, style[state.theme])}>
      <div className={style.upload}>
        <label className={style.label}>
          <input
            type="file"
            accept={accept}
            onChange={(e) => handleChange(e)}
            idform={state.idForm}
            idinput={item.id}
          />
          {text}
        </label>
        <div>
          <p className={style.text}>{description}</p>
        </div>
      </div>
      {state[item.slug]?.length ? (
        <>
          <FileList
            files={state[item.slug]}
            handleRemoveFile={handleRemoveFile}
          />
          <ErrorMessage textError={textError} />
        </>
      ) : (
        <>
          <ErrorMessage textError={textError} />
          <FileList
            files={state[item.slug]}
            handleRemoveFile={handleRemoveFile}
          />
        </>
      )}
    </div>
  );
};

export default FileField;

FileField.propTypes = {
  item: PropTypes.object,
};
