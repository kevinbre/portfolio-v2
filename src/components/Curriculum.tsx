import { useContext, useRef, useState } from "react";
import { SectionLayout } from "../layout/SectionLayout";
import { ImageMagnifier } from "../utils/magnifier";
import { Switch } from "./Switch";
import { GlobalContext } from "../context/GlobalContext";
import { cvTexts } from "../i18n/cvTexts";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface Props {
  curriculumRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Curriculum: React.FC<Props> = ({ curriculumRef }) => {
  const { language } = useContext(GlobalContext);
  const breakpoint = useBreakpoint();
  const { cv } = cvTexts[language];
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
            <>
              <div
                ref={inputRef}
                className={`duration-300 ease-out rounded-md ${cv.style} bg-contain bg-center bg-no-repeat w-[350px] h-[480px] md:w-[450px] md:h-[615px]`}
              />
            </>
          ) : (
            <ImageMagnifier
              width={breakpoint.is.sm ? "350px" : "450px"}
              height={breakpoint.is.sm ? "480px" : "615px"}
              src={language === "ES" ? "/spanish-cv.jpg" : "/english-cv.jpg"}
            />
          )}
        </>
      </div>
      <div className="mt-10">
        <Switch onClick={() => setEffect(!effect)} />
      </div>
    </SectionLayout>
  );
};
