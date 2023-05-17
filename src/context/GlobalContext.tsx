import { createContext, useMemo, useState } from "react";
import { configurationStyle } from "../mocks/colors";

interface GlobalContextProps {
  siteColor: string;
  setSiteColor: (color: string) => void;

  colorTheme: {
    text: string;
    border: string;
    background: string;
    hover: {
      text: string;
      background: string;
      border: string;
    };
    groupHover: {
      text: string;
      background: string;
      border: string;
    };
  };
}

const INITIAL_CONTEXT: GlobalContextProps = {
  siteColor: "yellow",
  setSiteColor: (unknown) => unknown,
  colorTheme: {
    text: "",
    border: "",
    background: "",
    hover: {
      text: "",
      background: "",
      border: "",
    },
    groupHover: {
      text: "",
      background: "",
      border: "",
    },
  },
};

export const GlobalContext = createContext(INITIAL_CONTEXT);

interface Props {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [siteColor, setSiteColor] = useState("yellow");

  const colorTheme = useMemo(() => {
    return configurationStyle[siteColor as keyof typeof configurationStyle];
  }, [siteColor]);

  const value = {
    siteColor,
    setSiteColor,
    colorTheme,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
