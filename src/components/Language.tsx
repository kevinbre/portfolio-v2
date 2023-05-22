import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

interface Props {
  onClick?: () => void;
}

export const Language: React.FC<Props> = ({ onClick = () => {} }) => {
  const { language, selectLanguage } = useContext(GlobalContext);

  const flagStyles = `cursor-pointer hover:scale-110 hover:grayscale-0`;

  return (
    <div className="flex gap-2 items-center">
      <img
        src="/usa-flag.png"
        className={`${flagStyles} ${
          language === "EN" ? "grayscale-0" : "grayscale"
        } `}
        onClick={() => {
          selectLanguage("EN"), onClick();
        }}
        width={30}
      />

      <img
        src="/arg-flag.png"
        className={`${flagStyles} ${
          language === "ES" ? "grayscale-0" : "grayscale"
        } `}
        onClick={() => {
          selectLanguage("ES"), onClick();
        }}
        width={30}
      />
    </div>
  );
};
