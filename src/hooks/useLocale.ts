import { useContext } from "react";
import { LocaleContext } from "../context/locale-context";

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside a LocaleProvider");
  }
  return context;
};
