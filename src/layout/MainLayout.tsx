interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return <div className="text-white bg-neutral-950">{children}</div>;
};
