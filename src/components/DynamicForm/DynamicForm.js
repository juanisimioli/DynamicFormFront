import PropTypes from "prop-types";

import ItemsForm from "./ItemsForm/ItemsForm";
import FormStore from "./FormStore";
import ContainerForm from "./ContainerForm/ContainerForm";
import TitleForm from "./TitleForm/TitleForm";

import style from "./dynamicForm.module.scss";

const DynamicForm = ({
  onSuccessSubmit,
  theme,
  fields,
  titleForm,
  titleSubmitButton,
}) => {
  return (
    <FormStore fields={fields} theme={theme}>
      <ContainerForm>
        <TitleForm title={titleForm} />
        <form className={style.container}>
          <ItemsForm
            fields={fields}
            onSuccessSubmit={onSuccessSubmit || "Form"}
            submitTitle={titleSubmitButton || "Submit"}
            titleForm={titleForm}
          />
        </form>
      </ContainerForm>
    </FormStore>
  );
};

export default DynamicForm;

DynamicForm.propTypes = {
  titleForm: PropTypes.string,
  titleSubmitButton: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSuccessSubmit: PropTypes.func,
  theme: PropTypes.string.isRequired,
};
