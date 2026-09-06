import { useCallback, useEffect, useMemo, useState } from "react";
import type { Locale, Localized } from "../data/types";
import { LocaleContext } from "./locale-context";

const STORAGE_KEY = "portfolio-locale";

const readInitialLocale = (): Locale => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ES" || stored === "EN") return stored;
  } catch {
    /* Private mode or blocked storage: fall back to the browser language. */
  }
  return navigator.language.toLowerCase().startsWith("en") ? "EN" : "ES";
};

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale === "ES" ? "es" : "en";
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Not being able to remember the choice is not worth breaking over. */
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: <T,>(entry: Localized<T>): T => entry[locale],
    }),
    [locale, setLocale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};
