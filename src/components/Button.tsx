import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

interface Props {
  children: React.ReactNode;
  variant?: "outline" | "solid" | "icon";
  color?: "primary" | "secondary";
  link?: string;
}

export const Button: React.FC<Props> = ({
  children,
  variant = "solid",
  color = "primary",
  link,
}) => {
  const { colorTheme } = useContext(GlobalContext);
  const btnColor = {
    primary: {
      solid: `text-black hover:text-white ${colorTheme.background} ${colorTheme.hover.background}`,
      outline: `${colorTheme.text} ${colorTheme.hover.text} border-2 ${colorTheme.border} ${colorTheme.hover.border}}`,
      icon: `${colorTheme.text} ${colorTheme.hover.text} h-9 w-9 text-3xl`,
    },
    secondary: {
      solid: "text-white bg-purple-600",
      outline: "",
      icon: "",
    },
  };
  const classes = `${
    btnColor[color][variant]
  } flex justify-center items-center rounded-md transition-all ${
    variant === "icon" ? "hover:text-4xl p-0" : "hover:scale-105 px-4 py-1"
  } font-medium`;
  return (
    <>
      {link ? (
        <a href={link} className={classes} target="_blank">
          {children}
        </a>
      ) : (
        <button className={classes}>{children}</button>
      )}
    </>
  );
};
