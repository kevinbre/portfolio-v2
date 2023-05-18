import { Divide as Hamburger } from "hamburger-react";

interface Props {
  children: React.ReactNode;
  mobile?: boolean;
  openMenu: boolean;
}

export const Burguer: React.FC<Props> = ({
  children,
  mobile = true,
  openMenu,
}) => {
  return (
    <>
      {mobile ? (
        <div
          className={`absolute bg-neutral-950/80 backdrop-blur-lg top-[56px] ${
            openMenu ? "h-screen py-20 " : "h-0 invisible"
          } left-0 w-screen flex justify-center transition-all z-50`}
        >
          {children}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
