import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }) => {
  const { colorTheme } = useContext(GlobalContext);
  return <h2 className={`${colorTheme} text-3xl`}>{title}</h2>;
};
