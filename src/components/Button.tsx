interface Props {
  children: React.ReactNode;
  variant?: "outline" | "solid" | "icon";
  color?: "primary" | "secondary";
  link?: string;
  name?: string;
  download?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({
  children,
  variant = "solid",
  color = "primary",
  link,
  name = "button",
  download,
  className,
  onClick,
}) => {
  const btnColor = {
    primary: {
      solid: `text-black hover:text-white bg-yellow-400 hover:bg-yellow-600`,
      outline: `text-yellow-400 hover:text-yellow-400 border-2 border-yellow-400 hover:border-yellow-600`,
      icon: `text-yellow-400 hover:text-yellow-600 h-9 w-9 text-3xl`,
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
  } font-medium ${className}`;
  return (
    <>
      {link ? (
        <a href={link} className={classes} target="_blank" download={download} onClick={() => {
          onClick && onClick();
        }}>
          {children}
        </a>
      ) : (
        <button
          className={classes}
          name={name}
          onClick={() => {
            onClick && onClick();
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};
