import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

import FormReducer from "./FormReducer";
import { initialState } from "./initialState";

const FormStore = ({ children, fields, theme }) => {
  const [state, dispatch] = useReducer(
    FormReducer,
    initialState(fields, theme)
  );

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext();

export default FormStore;

FormStore.propTypes = {
  fields: PropTypes.array,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
};
