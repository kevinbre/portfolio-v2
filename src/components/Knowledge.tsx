import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { siteTexts } from "../i18n/siteTexts";
import { SectionLayout } from "../layout/SectionLayout";
import { technologies } from "../mocks/technologies";

interface Props {
  knowledgeRef: React.MutableRefObject<null | HTMLDivElement>;
}

export const Knowledge: React.FC<Props> = ({ knowledgeRef }) => {
  const { language } = useContext(GlobalContext);
  const { knowledge } = siteTexts[language].components;

  return (
    <SectionLayout
      title={knowledge.title}
      reference={knowledgeRef}
      subtitle={knowledge.subtitle}
    >
      <div
        className="h-fit grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full gap-4 "
        style={{ perspective: "1500px" }}
      >
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex gap-4 h-fit transition-all"
          >
            <span className="flex flex-col gap-2 items-center">
              <img
                src={technology.icon}
                width={100}
                height={100}
                alt={`${technology.name} icon`}
                className={`hover:scale-95 transition-all hover:shadow-md rounded-3xl`}
              />
              <h3 className="text-white">{technology.name}</h3>
            </span>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};
