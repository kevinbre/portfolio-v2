import { createContext, useState } from "react";

interface GlobalContextProps {
  siteColor: string;
  setSiteColor: (color: string) => void;
}

interface Props {
  children: React.ReactNode;
}
const INITIAL_CONTEXT: GlobalContextProps = {
  siteColor: "green",
  setSiteColor: (unknown) => unknown,
};

export const GlobalContext = createContext(INITIAL_CONTEXT);

/* const colorsNumber: { [key: number]: string } = {
  1: "green",
  2: "blue",
  3: "yellow",
  4: "purple",
}; */

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [siteColor, setSiteColor] = useState("yellow");

  const value = {
    siteColor,
    setSiteColor,
  };

  /*  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 4) + 1;

    setSiteColor(colorsNumber[randomColor]);
  }, []); */

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
