import { useRef } from "react";

const useCustomCallback = (f, deps = []) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);
  const functionCalled = useRef();

  if (isFirstRender.current) {
    isFirstRender.current = false;
    functionCalled.current = f;
    return functionCalled.current;
  }

  for (let i = 0; i < deps.length; i++) {
    if (prevDeps.current[i] !== deps[i]) {
      functionCalled.current = f;
      prevDeps.current = deps;
    }
  }

  return functionCalled.current;
};

export default useCustomCallback;
