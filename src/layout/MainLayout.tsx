import { Footer } from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-gray-300 bg-neutral-950 font-sans">
      {children}
      <Footer />
    </div>
  );
};
