export const Logo: React.FC = () => {
  return (
    <div className="cursor-pointer group flex  transition-all">
      <div className={`text-white group-hover:text-yellow-400 flex`}>
        <span className="group-hover:pr-2 transition-all">&lt;</span>
        <span className="w-0 group-hover:w-fit hidden group-hover:block">
          Ke
        </span>
      </div>
      <div
        className={`group-hover:text-white transition-all text-yellow-400 flex`}
      >
        <span className="w-0 group-hover:w-fit hidden group-hover:block">
          v
        </span>
        <span className="group-hover:pl-2 transition-all">/&gt;</span>
      </div>
    </div>
  );
};
