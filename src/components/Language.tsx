import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

interface Props {
  onClick?: () => void;
}

export const Language: React.FC<Props> = ({ onClick = () => {} }) => {
  const { selectLanguage } = useContext(GlobalContext);

  const flagStyles = `cursor-pointer hover:scale-105 transition-all`;

  return (
    <div className="flex gap-2 items-center">
      <img
        src="/usa-flag.png"
        className={flagStyles}
        onClick={() => {
          selectLanguage("EN"), onClick();
        }}
        width={30}
      />

      <img
        src="/arg-flag.png"
        className={flagStyles}
        onClick={() => {
          selectLanguage("ES"), onClick();
        }}
        width={30}
      />
    </div>
  );
};
