import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handler, listenCapturing]);

  return ref;
}
