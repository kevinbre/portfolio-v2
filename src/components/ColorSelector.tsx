import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const ColorSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { siteColor, setSiteColor } = useContext(GlobalContext);

  const selectColor = (string: "green" | "blue" | "purple" | "yellow") => {
    setOpen(false);
    setSiteColor(string);
  };

  return (
    <div className="relative flex items-center gap-2">
      <div className="flex flex-col top-0 gap-4  h-full justify-center items-center p-1 rounded-full transition-all">
        <button
          className={`bg-${siteColor}-400 w-5 h-5 rounded-full hover:scale-110`}
          onClick={() => setOpen(!open)}
        />

        <div
          className={`absolute top-8 flex justify-center items-center flex-col gap-2 bg-neutral-800  ${
            open ? "h-fit p-2" : "h-0"
          } transition-all rounded-xl w-20}`}
        >
          <button
            className="bg-green-400 w-5 h-5 rounded-full"
            onClick={() => selectColor("green")}
          />
          <button
            className="bg-blue-400 w-5 h-5 rounded-full"
            onClick={() => selectColor("blue")}
          />
          <button
            className="bg-yellow-400 w-5 h-5 rounded-full"
            onClick={() => selectColor("yellow")}
          />
          <button
            className="bg-purple-400 w-5 h-5 rounded-full"
            onClick={() => selectColor("purple")}
          />
        </div>
      </div>
    </div>
  );
};
