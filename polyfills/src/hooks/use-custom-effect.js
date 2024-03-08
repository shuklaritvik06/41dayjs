import { useRef } from "react";

const useCustomEffect = (cd, deps = []) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    const clear = cd();
    return () => {
      clear();
    };
  }

  for (let i = 0; i < deps.length; i++) {
    if (prevDeps.current[i] !== deps[i]) {
      const effect = cd();
      prevDeps.current = deps;
      return () => {
        effect();
      };
    }
  }

  return () => {};
};

export default useCustomEffect;
