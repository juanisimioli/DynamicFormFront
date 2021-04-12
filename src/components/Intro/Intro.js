import style from "./intro.module.scss";

const Intro = () => {
  return (
    <header className={style.intro}>
      <h1>DYNAMIC FORM</h1>
      <p>
        DynamicForm is a component that receives an array of fields, and
        generates automatically a complete and functional form. Made with React
        JS and hooks like useReducer and useContext to manage a global state for
        each form. Backend is an AWS Lambda function made with Node JS that
        receives the formData and sends it through an email (uses with
        NodeMailer). You can choose a theme between 'light' or 'dark'. Front End
        React App was deployed to AWS Amplify.
      </p>
      <p>
        Here you can see Front End code:{" "}
        <a href="https://github.com/juanisimioli/DynamicFormFront">
          Front Github Repo
        </a>
        <br />
        Here you can see Back End code:{" "}
        <a href="https://github.com/juanisimioli/DynamicFormBackLambda">
          Back Github Repo
        </a>
      </p>
      <p>
        (!) As this is a work in progress app, you will see that the file you
        send through the form, arrives broken to your email. I'm looking into
        why using lambda functions does not work (same code running locally
        works fine!).
      </p>
      <p>
        ALL the code from this application was made by Juan Ignacio Simioli.{" "}
        <br />
        Any question or comment, just contact me:{" "}
        <a href="mailto:juanisimioli@gmail.com">juanisimioli@gmail.com</a>.
      </p>

      <h2>
        👇 If you want to test the forms, fill in the Email field with your
        personal email 👇
      </h2>
    </header>
  );
};

export default Intro;
