import { Title } from "../components/Title";

interface Props {
  children: React.ReactNode;
  title: string;
  reference: React.MutableRefObject<null | HTMLDivElement>;
}

export const SectionLayout: React.FC<Props> = ({
  children,
  title,
  reference,
}) => {
  return (
    <section
      className="min-h-screen flex justify-center py-24 flex-col items-center gap-10"
      ref={reference}
    >
      <Title title={title} />
      <div className="h-full">{children}</div>
    </section>
  );
};
