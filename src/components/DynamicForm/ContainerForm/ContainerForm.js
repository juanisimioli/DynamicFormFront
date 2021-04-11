import { useContext } from "react";
import { Context } from "../FormStore";
import style from "./containerForm.module.scss";

const ContainerForm = ({ children }) => {
  const [state] = useContext(Context);
  return <section className={style[state.theme]}>{children}</section>;
};

export default ContainerForm;
