interface Props {
  onClick: () => void;
}

export const Switch: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() => onClick()}
        />

        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-500"></div>
      </label>
      <span className="text-sm text-center font-medium text-gray-900 dark:text-gray-300">
        Efecto 3D
      </span>
    </div>
  );
};
