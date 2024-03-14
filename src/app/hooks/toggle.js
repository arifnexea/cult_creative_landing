import { useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState((prevState) => !prevState);
  };

  const setToggle = (value) => {
    setState(value);
  };

  return [state, toggle, setToggle];
};

export default useToggle;
