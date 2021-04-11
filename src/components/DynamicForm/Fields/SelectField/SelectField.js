import PropTypes from "prop-types";
import Select from "react-select";

import { Context } from "../../FormStore";
import { useContext, useEffect, useState } from "react";

import { lightSelect, darkSelect } from "./stylesSelect";

const assignStyle = (theme, error) => {
  switch (theme) {
    case "light":
      return lightSelect(error);
    case "dark":
      return darkSelect(error);
    default:
      return lightSelect(error);
  }
};

const SelectField = ({ item, error }) => {
  const [state, dispatch] = useContext(Context);

  const customStyles = assignStyle(state.theme, error);

  const [isComponentMounted, setIsComponentMounted] = useState(false);
  useEffect(() => setIsComponentMounted(true), []);

  return isComponentMounted ? (
    <Select
      className="selectForm"
      onBlur={() => dispatch({ type: "ADD_DIRTY_FIELD", payload: item.slug })}
      onChange={(selected) =>
        dispatch({
          type: `UPDATE`,
          payload: {
            [item.slug]: { label: selected.label, value: selected.value },
          },
        })
      }
      isSearchable={false}
      options={item.options}
      styles={customStyles}
      value={{
        label: state[item.slug]?.label ?? null,
        value: state[item.slug]?.value ?? null,
      }}
    />
  ) : null;
};
export default SelectField;

SelectField.propTypes = {
  error: PropTypes.string,
  item: PropTypes.object,
};
