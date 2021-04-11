import { useContext } from "react";

import { Context } from "../FormStore";

import Loader from "react-loader-spinner";

function colorLoader(theme) {
  switch (theme) {
    case "dark":
      return "#1abc9c";
    case "light":
      return "#0af";
    default:
      return "#0af";
  }
}

const LoaderSubmit = () => {
  const [state] = useContext(Context);
  return (
    <Loader
      type="TailSpin"
      color={colorLoader(state.theme)}
      height={36}
      width={36}
    />
  );
};

export default LoaderSubmit;
