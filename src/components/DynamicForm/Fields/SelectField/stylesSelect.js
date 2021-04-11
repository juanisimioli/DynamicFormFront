const height = "2.5rem";
const dangerColor = "#ff3e3e";
const skyBlueColor = "#0af";
const seaGreenColor = "#1abc9c";
const greyColor = "#999999";
const darkGrey = "#555555";
const lightGrey = "#ccc";
const blueishColor = "#f5f7fa";

export const lightSelect = (error) => ({
  indicatorSeparator: () => {},
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#222222" : "#c4c4c4",
    backgroundColor: "#ffffff",
    padding: 15,
    cursor: "pointer",
    "&:hover": { color: "#222222" },
  }),
  menu: (provided) => ({
    ...provided,
    border: skyBlueColor,
  }),

  control: (base, state) => ({
    ...base,
    borderColor: error
      ? dangerColor
      : state.isFocused
      ? skyBlueColor
      : greyColor,
    outline: "none",
    boxShadow: "none",
    height: height,
    cursor: "pointer",
    border: `1.5px solid ${error ? dangerColor : "#ccc"}`,

    "&:hover": {
      borderColor: error ? dangerColor : skyBlueColor,
    },
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    const color = darkGrey;
    const fontFamily = "Nunito";
    const fontWeight = 400;
    const fontSize = "0.85rem";

    return {
      ...provided,
      opacity,
      transition,
      color,
      fontFamily,
      fontWeight,
      fontSize,
    };
  },
});

export const darkSelect = (error) => ({
  indicatorSeparator: () => {},
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? blueishColor : greyColor,
    backgroundColor: darkGrey,
    padding: 15,
    cursor: "pointer",

    "&:hover": { color: blueishColor },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: darkGrey,
    border: seaGreenColor,
  }),

  control: (base, state) => ({
    ...base,
    borderColor: error
      ? dangerColor
      : state.isFocused
      ? seaGreenColor
      : greyColor,
    outline: "none",
    boxShadow: "none",
    height: height,
    cursor: "pointer",
    backgroundColor: darkGrey,
    border: `1.5px solid ${error ? dangerColor : "#999"}`,

    "&:hover": {
      borderColor: error ? dangerColor : seaGreenColor,
    },
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    const color = blueishColor;
    const fontFamily = "Nunito";
    const fontWeight = 400;
    const fontSize = "0.85rem";

    return {
      ...provided,
      opacity,
      transition,
      color,
      fontFamily,
      fontWeight,
      fontSize,
    };
  },
});
