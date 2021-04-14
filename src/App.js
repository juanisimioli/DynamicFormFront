import { useState } from "react";

import DynamicForm from "./components/DynamicForm/DynamicForm";
import Intro from "./components/Intro/Intro";
import ModalSuccess from "./components/ModalSuccess/ModalSuccess";

import { fieldsForm1, fieldsForm2 } from "./data/fieldsForm";

import "./styles/global.scss";
import "./styles/fonts.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSuccessSubmit = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Intro />
      <button onClick={() => setIsModalOpen(!isModalOpen)}>TEST</button>
      <ModalSuccess isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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
    </>
  );
}

export default App;
