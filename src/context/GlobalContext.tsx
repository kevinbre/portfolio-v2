import { createContext, useEffect, useState } from "react";

type Language = "ES" | "EN";

interface GlobalContextProps {
  language: "ES" | "EN";
  selectLanguage: (language: Language) => void;
}

const INITIAL_CONTEXT: GlobalContextProps = {
  language: "ES",
  selectLanguage: () => {},
};

export const GlobalContext = createContext<GlobalContextProps>(INITIAL_CONTEXT);

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [language, setLanguage] = useState(INITIAL_CONTEXT.language);

  const selectLanguage = (language: Language) => {
    setLanguage(language);
  };

  useEffect(() => {
    const userLanguage = navigator.language.split("-")[0].toUpperCase();

    setLanguage(
      userLanguage === "ES" || userLanguage === "EN" ? userLanguage : "ES"
    );
  }, []);

  const value = {
    language,
    selectLanguage,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
