import { useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { SiCss3, SiTypescript, SiVisualstudiocode } from "react-icons/si";
import { VscFiles, VscJson } from "react-icons/vsc";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { code } from "../mocks/code";
import { vscodeFolders } from "../mocks/files";
import { getIcon } from "../utils/getIcon";

interface ShowFolders {
  src: boolean;
  components: boolean;
  styles: boolean;
  [key: string]: boolean;
}

export const Vscode: React.FC = () => {
  const [showFolders, setShowFolders] = useState<ShowFolders>({
    src: true,
    components: false,
    styles: false,
  });
  const [showFiles, setShowFiles] = useState(true);
  const [fileSelected, setFileSelected] = useState("readme");
  const [selectedFolder, setSelectedFolder] = useState("README.md");

  const techIcons: { [key: string]: JSX.Element } = {
    js: <DiJavascript1 className="text-yellow-400" />,
    ts: <SiTypescript className="text-blue-400" />,
    tsx: <SiTypescript className="text-blue-400" />,
    css: <SiCss3 className="text-blue-400" />,
    json: <VscJson className="text-yellow-400" />,
    md: <HiOutlineInformationCircle className="text-blue-500" />,
    config: <DiJavascript1 className="text-yellow-400" />,
  };

  return (
    <div className="flex flex-col w-full max-w-[800px] ">
      <div className="w-full h-8 bg-[#1E2227] justify-between flex items-center px-2 rounded-t-lg">
        <div className="flex items-center gap-2">
          <SiVisualstudiocode className="text-blue-500" />
          <h2 className="text-gray-400 font-medium">Portfolio</h2>
        </div>
        <div>{selectedFolder}</div>
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF605C]" />
          <div className="w-2 h-2 rounded-full bg-[#FFBD44]" />
          <div className="w-2 h-2 rounded-full bg-[#00CA4E]" />
        </div>
      </div>
      <div className="flex">
        <div className="flex">
          <div className="p-2 h-full bg-[#1E2227] text-xl text-gray-400 ">
            <VscFiles
              onClick={() => setShowFiles(!showFiles)}
              className={`cursor-pointer hover:text-gray-200 ${
                showFiles ? "text-gray-200" : ""
              }`}
            />
          </div>

          <div
            className={`${
              showFiles ? "w-52 h-72 visible" : "w-0 hidden"
            } bg-[#23272E] transition-all md:h-[450px] overflow-auto scrollbar`}
          >
            <div className="flex gap-2 h-fit items-center cursor-pointer hover:bg-gray-600/20 px-2 py-1 select-none">
              <span
                className={`${
                  showFolders["src"] ? "rotate-180" : "rotate-90"
                } transition-all`}
              >
                <BsChevronUp />
              </span>
              src
            </div>

            {vscodeFolders.map((folder) => {
              return (
                <div key={folder.id}>
                  {folder.type === "folder" && (
                    <>
                      <div
                        className="flex gap-2 h-fit items-center cursor-pointer hover:bg-gray-600/20 px-4 py-1 select-none"
                        onClick={() => {
                          setShowFolders({
                            ...showFolders,
                            [folder.name]: !showFolders[folder.name],
                          });
                        }}
                      >
                        <span
                          className={`${
                            showFolders[folder.name]
                              ? "rotate-180"
                              : "rotate-90"
                          } transition-all`}
                        >
                          <BsChevronUp />
                        </span>

                        <span>{folder.name}</span>
                      </div>
                    </>
                  )}

                  <ul className="">
                    {showFolders[folder.name] &&
                      folder.files.map((file) => {
                        const isSelected = fileSelected === file.name;
                        const icon = getIcon(file.file);

                        return (
                          <li
                            key={file.name}
                            className={`cursor-pointer text-sm hover:bg-gray-600/20 ${
                              folder.type === "file" ? "px-2 py-1" : "pl-6 py-1"
                            } select-none flex gap-2 items-center ${
                              isSelected ? "bg-gray-600/20" : ""
                            } `}
                            onClick={() => {
                              setFileSelected(file.name),
                                setSelectedFolder(file.file);
                            }}
                          >
                            {techIcons[icon]}
                            {file.file}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <SyntaxHighlighter
          language="typescript"
          style={atomOneDark}
          className="h-72 md:h-[450px] w-full overflow-auto scrollbar"
          showLineNumbers
        >
          {code[fileSelected as keyof typeof code]}
        </SyntaxHighlighter>
      </div>
      <div className="w-full h-4 bg-[#1E2227] justify-between flex items-center px-2 text-xs rounded-b-lg">
        <h2 className="text-gray-200"></h2>
      </div>
    </div>
  );
};
