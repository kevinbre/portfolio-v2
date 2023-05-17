import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }) => {
  const { siteColor } = useContext(GlobalContext);
  return <h2 className={`text-${siteColor}-400 text-3xl`}>{title}</h2>;
};
