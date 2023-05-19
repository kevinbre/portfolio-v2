interface Props {
  title: string;
  subtitle?: string;
}

export const Title: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h2 className={`text-yellow-400 text-3xl`}>{title}</h2>
      {subtitle && <h3 className="text-medium text-center">{subtitle}</h3>}
    </div>
  );
};
