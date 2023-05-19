interface Props {
  children: React.ReactNode;
  mobile?: boolean;
  openMenu: boolean;
}

export const MenuMobile: React.FC<Props> = ({
  children,
  mobile = true,
  openMenu,
}) => {
  return (
    <>
      {mobile ? (
        <div
          className={`absolute bg-neutral-950/80 backdrop-filter backdrop-blur-lg border-0 top-[56px] ${
            openMenu ? "h-[calc(100vh-56px)] py-20" : "h-0 invisible"
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
