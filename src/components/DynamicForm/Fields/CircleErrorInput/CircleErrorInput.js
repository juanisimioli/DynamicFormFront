import style from "./circleErrorInput.module.scss";

const CircleErrorInput = ({ error }) => {
  return (
    <div className={style.container}>
      <div className={error && style.circleError} />
    </div>
  );
};

export default CircleErrorInput;
