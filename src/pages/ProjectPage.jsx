import { useState } from "react";
import FolderCard from "../components/FolderCard";
import BlendeCursor from "../components/RoundCursor";

// 项目数据
const projectList = [
  {
    name: "WeatherPets",
    folderBack: "/src/assets/WeatherPets/ProjectPage/FloderBack.svg",
    folderFront: "/src/assets/WeatherPets/ProjectPage/FloderFront1.svg",
    folderFrontHover: "/src/assets/WeatherPets/ProjectPage/FloderFront2.svg",
    card: "/src/assets/ProjectSection/WeatherPets.jpg",
    icons: [
      "/src/assets/WeatherPets/ProjectPage/1.svg",
      "/src/assets/WeatherPets/ProjectPage/2.svg",
      "/src/assets/WeatherPets/ProjectPage/3.svg",
    ],
    type: ["all", "uxui"],
  },

  {
    name: "ABC Mouse",
    folderBack: "/src/assets/ProjectFolder/ABCMouse/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/ABCMouse/FloderFront1.svg",
    folderFrontHover: "/src/assets/ProjectFolder/ABCMouse/FloderFront2.svg",
    card: "/src/assets/ProjectSection/ABCMouse.png",
    icons: [
      "/src/assets/ProjectFolder/ABCMouse/1.svg",
      "/src/assets/ProjectFolder/ABCMouse/2.svg",
      "/src/assets/ProjectFolder/ABCMouse/3.svg",
    ],
    type: ["all", "uxui"],
  },

  {
    name: "SlowFood",
    folderBack: "/src/assets/ProjectFolder/SlowFood/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/SlowFood/FloderFront1.svg",
    folderFrontHover: "/src/assets/ProjectFolder/SlowFood/FloderFront2.svg",
    card: "/src/assets/ProjectFolder/SlowFood/1.png",
    icons: [
      "/src/assets/ProjectFolder/SlowFood/1.svg",
      "/src/assets/ProjectFolder/SlowFood/2.svg",
      "/src/assets/ProjectFolder/SlowFood/3.svg",
    ],
    type: ["all", "uxui", "system"],
  },

  {
    name: "Puzzle Game",
    folderBack: "/src/assets/ProjectFolder/PuzzleGame/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/PuzzleGame/FloderFront1.svg",
    folderFrontHover: "/src/assets/ProjectFolder/PuzzleGame/FloderFront2.svg",
    card: "/src/assets/ProjectFolder/PuzzleGame/1.png",
    icons: [
      "/src/assets/ProjectSection2/JigsawPuzzle/1.svg",
      "/src/assets/ProjectSection2/JigsawPuzzle/2.svg",
      "/src/assets/ProjectSection2/JigsawPuzzle/4.svg",
    ],
    type: ["all", "uxui"],
  },

  {
    name: "Course Platform",
    folderBack: "/src/assets/ProjectFolder/CoursePlatform/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/CoursePlatform/FloderFront1.svg",
    folderFrontHover:
      "/src/assets/ProjectFolder/CoursePlatform/FloderFront2.svg",
    card: "/src/assets/ProjectFolder/CoursePlatform/1.png",
    icons: [
      "/src/assets/ProjectFolder/CoursePlatform/1.svg",
      "/src/assets/ProjectFolder/CoursePlatform/2.svg",
      "/src/assets/ProjectFolder/CoursePlatform/3.svg",
    ],
    type: ["all", "uxui"],
  },

  {
    name: "Autonomous Vehicle",
    folderBack: "/src/assets/ProjectFolder/AutonomousVehicle/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/AutonomousVehicle/FloderFront1.svg",
    folderFrontHover:
      "/src/assets/ProjectFolder/AutonomousVehicle/FloderFront2.svg",
    card: "/src/assets/ProjectSection/WeatherPets.jpg",
    icons: [
      "/src/assets/WeatherPets/ProjectPage/3.svg",
      "/src/assets/WeatherPets/ProjectPage/1.svg",
      "/src/assets/WeatherPets/ProjectPage/2.svg",
    ],
    type: ["all", "uxui", "hmi"],
  },

  {
    name: "Fire System",
    folderBack: "/src/assets/ProjectFolder/FireSystem/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/FireSystem/FloderFront1.svg",
    folderFrontHover: "/src/assets/ProjectFolder/FireSystem/FloderFront2.svg",
    card: "/src/assets/ProjectSection/WeatherPets.jpg",
    icons: [
      "/src/assets/WeatherPets/ProjectPage/3.svg",
      "/src/assets/WeatherPets/ProjectPage/1.svg",
      "/src/assets/WeatherPets/ProjectPage/2.svg",
    ],
    type: ["all", "system", "product"],
  },

  {
    name: "TIDE Website",
    folderBack: "/src/assets/ProjectFolder/TIDE/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/TIDE/FloderFront1.svg",
    folderFrontHover: "/src/assets/ProjectFolder/TIDE/FloderFront2.svg",
    card: "/src/assets/ProjectSection/WeatherPets.jpg",
    icons: [
      "/src/assets/WeatherPets/ProjectPage/3.svg",
      "/src/assets/WeatherPets/ProjectPage/1.svg",
      "/src/assets/WeatherPets/ProjectPage/2.svg",
    ],
    type: ["all", "uxui"],
  },

  {
    name: "Calligraphy Products",
    folderBack: "/src/assets/ProjectFolder/CalligraphyProducts/FloderBack.svg",
    folderFront:
      "/src/assets/ProjectFolder/CalligraphyProducts/FloderFront1.svg",
    folderFrontHover:
      "/src/assets/ProjectFolder/CalligraphyProducts/FloderFront2.svg",
    card: "/src/assets/ProjectSection/WeatherPets.jpg",
    icons: [
      "/src/assets/WeatherPets/ProjectPage/3.svg",
      "/src/assets/WeatherPets/ProjectPage/1.svg",
      "/src/assets/WeatherPets/ProjectPage/2.svg",
    ],
    type: ["all", "product"],
  },

  {
    name: "Company Systemic Design",
    folderBack:
      "/src/assets/ProjectFolder/CompanySystemicDesign/FloderBack.svg",
    folderFront:
      "/src/assets/ProjectFolder/CompanySystemicDesign/FloderFront1.svg",
    folderFrontHover:
      "/src/assets/ProjectFolder/CompanySystemicDesign/FloderFront2.svg",
    card: "/src/assets/ProjectSection/WeatherPets.jpg",
    icons: [
      "/src/assets/WeatherPets/ProjectPage/3.svg",
      "/src/assets/WeatherPets/ProjectPage/1.svg",
      "/src/assets/WeatherPets/ProjectPage/2.svg",
    ],
    type: ["all", "system"],
  },

  {
    name: "Smart Packaging",
    folderBack: "/src/assets/ProjectFolder/SmartPackaging/FloderBack.svg",
    folderFront: "/src/assets/ProjectFolder/SmartPackaging/FloderFront1.svg",
    folderFrontHover:
      "/src/assets/ProjectFolder/SmartPackaging/FloderFront2.svg",
    card: "/src/assets/ProjectSection/WeatherPets.jpg",
    icons: [
      "/src/assets/WeatherPets/ProjectPage/3.svg",
      "/src/assets/WeatherPets/ProjectPage/1.svg",
      "/src/assets/WeatherPets/ProjectPage/2.svg",
    ],
    type: ["all", "system"],
  },
  // ...更多项目
];

const FILTERS = [
  { key: "all", label: "All", bg: "bg-[#478BFF]", text: "text-white" },
  { key: "uxui", label: "UX/UI", bg: "bg-[#05A552]", text: "text-white" },
  { key: "product", label: "Product", bg: "bg-[#7A78FF]", text: "text-white" },
  { key: "hmi", label: "HMI", bg: "bg-[#FF6D39]", text: "text-white" },
  { key: "system", label: "System", bg: "bg-[#FFC413]", text: "text-white" },
];

export default function ProjectPage() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="h-screen pt-[10vh]">
      <BlendeCursor />
      <div className="w-screen min-h-14 mx-auto pt-8 border-b-[1px] ">
        {/* 分类选择器 */}
        <div
          className="mx-[10vw] flex gap-0 items-end "
          style={{ height: "48px" }}
        >
          {FILTERS.map((f) => {
            const isActive = selected === f.key;
            return (
              <button
                key={f.key}
                className={`
                relative px-8
                border border-black shadow-sm
                transition-all duration-200 rounded-b-none
                ${f.bg} ${f.text} 
                ${
                  isActive
                    ? "h-16 w-[10vw] text-3xl z-10  font-bold"
                    : "h-12 w-[10vw] text-2xl z-0 font-medium"
                } 
                flex items-center justify-center
              `}
                style={{
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                  borderTopLeftRadius: "9px",
                  borderTopRightRadius: "9px",
                  borderBottom: "0px ",
                }}
                onClick={() => setSelected(f.key)}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
      {/* 项目内容区 */}
      <div className="w-full flex flex-wrap gap-x-[5vw] gap-y-[25vh] pt-[15vh] justify-center">
        {projectList
          .filter((p) => selected === "all" || p.type.includes(selected))
          .map((p, idx) => (
            <FolderCard
              key={p.name + idx}
              folderBack={p.folderBack}
              folderFront={p.folderFront}
              folderFrontHover={p.folderFrontHover}
              card={p.card}
              icons={p.icons}
              name={p.name}
            />
          ))}
      </div>
    </div>
  );
}
