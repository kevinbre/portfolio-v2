import { createContext } from "react";
import type { Locale, Localized } from "../data/types";

export interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  /** Resuelve un valor localizado al idioma activo. */
  t: <T>(value: Localized<T>) => T;
}

export const LocaleContext = createContext<LocaleContextValue | null>(null);
