import DynamicForm from "./components/DynamicForm/DynamicForm";

import { fieldsForm1, fieldsForm2 } from "./data/fieldsForm";

import "./styles/global.scss";
import "./styles/fonts.scss";

function App() {
  const onSuccessSubmit = () => {
    alert("FORM SUBMITTED SUCCESSFULLY");
    console.log("form submitted successfully");
  };
  return (
    <section>
      <DynamicForm
        fields={fieldsForm1}
        onSuccessSubmit={onSuccessSubmit}
        theme="light"
        titleForm="Example Form Light Theme"
        titleSubmitButton="Send"
      />

      <DynamicForm
        fields={fieldsForm2}
        onSuccessSubmit={onSuccessSubmit}
        theme="dark"
        titleForm="Example Form Dark Theme"
        titleSubmitButton="Submit"
      />
    </section>
  );
}

export default App;
