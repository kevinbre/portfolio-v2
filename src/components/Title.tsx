interface Props {
  title: string;
}

export const Title: React.FC<Props> = ({ title }) => {
  return <h2 className={`text-yellow-400 text-3xl`}>{title}</h2>;
};
