import { useEffect, useState } from "react";

const getInnerHeight = () => {
  if (typeof window !== "undefined") {
    return window.innerHeight;
  }
  return 0;
};

const useInnerHeight = (rerenderDependencies: any[] = []) => {
  const [state, setState] = useState<number>(getInnerHeight());

  useEffect(() => {
    function handleResize() {
      setState(getInnerHeight());
    }
    window.addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, [...rerenderDependencies]);

  return { innerHeight: state };
};

export default useInnerHeight;
