import style from "./intro.module.scss";

const Intro = () => {
  return (
    <header className={style.intro}>
      <h1>DYNAMIC FORM</h1>
      <p>
        {`<DynamicForm />`} is a component that receives an array of fields and
        generates automatically a complete and functional form. <br />
        Made with React JS and hooks like useReducer and useContext to manage a
        global state for each form. <br />
        Backend is an AWS Lambda function made with Node JS that receives the
        formData and sends it through an email (NodeMailer). <br />
        You can choose a theme between 'light' or 'dark'. <br />
        Front End React App was deployed to AWS Amplify.
      </p>
      <p>
        Here you can see{" "}
        <a href="https://github.com/juanisimioli/DynamicFormFront">
          Front End Github Repo
        </a>
        <br />
        Here you can see{" "}
        <a href="https://github.com/juanisimioli/DynamicFormBackLambda">
          Back End Github Repo
        </a>
      </p>
      <p>
        ALL the code from this application was made by Juan Ignacio Simioli.{" "}
        <br />
        Any question or comment, just contact me:{" "}
        <a href="mailto:juanisimioli@gmail.com">juanisimioli@gmail.com</a>.
      </p>

      <h2 className={style.center}>
        👇 HERE YOU CAN TEST THE FORMS (fill in the Email field with your
        personal email) 👇
      </h2>
    </header>
  );
};

export default Intro;
