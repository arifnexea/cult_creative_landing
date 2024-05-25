import React, { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMdAndAbove, setIsMdAndAbove] = useState(false);
  const [isLgAndAbove, setIsLgAndAbove] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMdAndAbove(window.innerWidth >= 1024);
      setIsLgAndAbove(window.innerWidth >= 1280); // Change breakpoint as needed
    }
    handleResize(); // Call once to set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMdAndAbove,
    isLgAndAbove,
  };
};

export default useMediaQuery;
