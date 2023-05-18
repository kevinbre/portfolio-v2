import { useMemo } from "react";
import { useWindowSize } from "./useWindowSize";

export function useBreakpoint() {
  const { width } = useWindowSize();

  const breakpoint = useMemo(() => {
    if (!width) return "sm";
    if (width <= 640) return "sm";
    if (width <= 768) return "md";
    if (width <= 1024) return "lg";
    if (width <= 1280) return "xl";
    return "2xl";
  }, [width]);

  return {
    is: {
      sm: breakpoint === "sm",
      md: breakpoint === "md",
      lg: breakpoint === "lg",
      xl: breakpoint === "xl",
      "2xl": breakpoint === "2xl",
    },
    breakpoint,
  };
}
