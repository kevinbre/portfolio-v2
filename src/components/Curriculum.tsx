import { useRef, useState } from "react";
import { SectionLayout } from "../layout/SectionLayout";
import { ImageMagnifier } from "../utils/magnifier";
import { Switch } from "./Switch";

interface Props {
  curriculumRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Curriculum: React.FC<Props> = ({ curriculumRef }) => {
  const [effect, setEffect] = useState(false);

  let bounds;
  const inputRef = useRef<HTMLImageElement>(null);

  const rotateToMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (inputRef.current !== null && e) {
      bounds = inputRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };
      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

      inputRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
          ${center.y / 100},
          ${-center.x / 100},
          0,
          ${Math.log(distance) * 2}deg
          )
          `;
    }
  };
  const removeListener = (e: React.MouseEvent<HTMLDivElement>) => {
    if (inputRef.current !== null && e) inputRef.current.style.transform = "";
  };

  return (
    <SectionLayout reference={curriculumRef} title={"Curriculum"}>
      <div
        className="ease-in-out rounded-lg"
        style={{ perspective: "1000px", transform: "rotate3d(0)" }}
        onMouseLeave={removeListener}
        onMouseMove={rotateToMouse}
      >
        <>
          {effect ? (
            <img
              src="/cv.jpg"
              ref={inputRef}
              className="duration-300 ease-out rounded-md max-w-2xl w-[350px] h-[500px] bg-contain bg-center bg-no-repeat"
            />
          ) : (
            <ImageMagnifier width={"350px"} src="/cv.jpg" />
          )}
        </>
      </div>
      <div className="mt-10">
        <Switch onClick={() => setEffect(!effect)} />
      </div>
    </SectionLayout>
  );
};
