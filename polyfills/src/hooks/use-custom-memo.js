import { useRef } from "react";

const useCustomMemo = (cb, deps = []) => {
  const cached = useRef(null);
  const dependencies = useRef(deps);
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    cached.current = cb();
    dependencies.current = deps;
    return cached.current;
  }

  if (dependencies.current.some((dep, i) => dep !== deps[i])) {
    cached.current = cb();
    dependencies.current = deps;
  }

  return cached.current;
};

export default useCustomMemo;
