import PropTypes from "prop-types";
import { useContext } from "react";
import { Context } from "../FormStore";
import style from "./titleForm.module.scss";

const TitleForm = ({ title }) => {
  const [state] = useContext(Context);
  return <h2 className={style[state.theme]}>{title}</h2>;
};

export default TitleForm;

TitleForm.propTypes = {
  title: PropTypes.string,
};
