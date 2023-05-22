import { Footer } from "../components/Footer";

interface Props {
  children: React.ReactNode;
  footerRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const MainLayout: React.FC<Props> = ({ children, footerRef }) => {
  return (
    <div className="text-gray-300 bg-neutral-950 font-sans overflow-x-hidden">
      {children}
      <Footer reference={footerRef} />
    </div>
  );
};
