import { useState, useEffect } from "react";

export const sizes = {
  tablet: 768,
  laptop: 992,
  desktop: 1170
};

export function useDevice(breakpoints = sizes) {
  if (typeof window === "undefined") {
    return {};
  }
  const isMOBILE = "isMOBILE";
  const isTABLET = "isTABLET";
  const isLAPTOP = "isLAPTOP";
  const isDESKTOP = "isDESKTOP";

  const onLoadDevice = () => {
    return window.innerWidth < breakpoints.tablet
      ? isMOBILE
      : window.innerWidth < breakpoints.laptop
      ? isTABLET
      : window.innerWidth < breakpoints.desktop
      ? isLAPTOP
      : isDESKTOP;
  };

  const [device, setDevice] = useState(onLoadDevice());
  const onResizeDevice = () => {
    return window.innerWidth < breakpoints.tablet
      ? setDevice(isMOBILE)
      : window.innerWidth < breakpoints.laptop
      ? setDevice(isTABLET)
      : window.innerWidth < breakpoints.desktop
      ? setDevice(isLAPTOP)
      : setDevice(isDESKTOP);
  };

  useEffect(() => {
    window.addEventListener("resize", onResizeDevice);
    return () => {
      window.removeEventListener("resize", onResizeDevice);
    };
  }, []);

  return {
    isMOBILE: device === isMOBILE,
    isTABLET: device === isTABLET,
    isLAPTOP: device === isLAPTOP,
    isDESKTOP: device === isDESKTOP
  };
}
