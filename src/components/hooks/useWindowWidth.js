import { useState, useEffect } from "react";

export default function useWindowWidth(width) {
  const [windowSize, setWindowSize] = useState(width);

  function changeWindowSize() {
    setWindowSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize > width;
}

// if window width is GREATER than the variable WIDTH, returns TRUE
