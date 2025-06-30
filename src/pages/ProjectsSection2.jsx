import React from "react";
import ProjectItem from "../components/ProjectItem.jsx";

export default function ProjectsSection() {
  return (
    <section className="h-[20vh] sm:h-[100vh] w-[100vw] relative  sm:pt-[5vh]">
      <div className="flex flex-col justify-center">
        <ProjectItem
          name="SlowFood"
          icons={[
            "/src/assets/ProjectSection2/SlowFood/Eggplant.svg",
            "/src/assets/ProjectSection2/SlowFood/Onion.svg",
            "/src/assets/ProjectSection2/SlowFood/Pepper.svg",
            "/src/assets/ProjectSection2/SlowFood/Tomato.svg",
          ]}
          bgImage="/src/assets/ProjectSection2/WhiteArrow.svg"
          bgImageHover="/src/assets/ProjectSection2/SlowFood/GreenArrow.svg"
          MockupImage="/src/assets/ProjectSection2/SlowFood/Mockup.png"
          MockupImageClassName="h-[10vh] sm:h-[40vh] w-auto bottom-0"
        />
        <ProjectItem
          name="Jigsaw Puzzle App"
          icons={[
            "/src/assets/ProjectSection2/JigsawPuzzle/1.svg",
            "/src/assets/ProjectSection2/JigsawPuzzle/2.svg",
            "/src/assets/ProjectSection2/JigsawPuzzle/3.svg",
            "/src/assets/ProjectSection2/JigsawPuzzle/4.svg",
          ]}
          bgImage="/src/assets/ProjectSection2/WhiteArrow.svg"
          bgImageHover="/src/assets/ProjectSection2/JigsawPuzzle/PurpleArrow.svg"
          MockupImage="/src/assets/ProjectSection2/JigsawPuzzle/PuzzleMockup.png"
          MockupImageClassName="h-[10vh] sm:h-[40vh] w-auto ml-[10vw] bottom-0"
        />
        <ProjectItem
          name="TIDE Website"
          icons={[
            "/src/assets/ProjectSection2/TIDE/1.svg",
            "/src/assets/ProjectSection2/TIDE/2.svg",
            "/src/assets/ProjectSection2/TIDE/3.svg",
            "/src/assets/ProjectSection2/TIDE/4.svg",
          ]}
          bgImage="/src/assets/ProjectSection2/WhiteArrow.svg"
          bgImageHover="/src/assets/ProjectSection2/TIDE/BluePurpleArrow.svg"
          MockupImage="/src/assets/ProjectSection2/TIDE/TIDEMockup.png"
          MockupImageClassName="h-[10vh] sm:h-[30vh] w-auto ml-[10vw] bottom-0"
        />
        <ProjectItem
          name="HMI Design"
          icons={[
            "/src/assets/ProjectSection2/HMI/1.svg",
            "/src/assets/ProjectSection2/HMI/2.svg",
            "/src/assets/ProjectSection2/HMI/3.svg",
            "/src/assets/ProjectSection2/HMI/4.svg",
          ]}
          bgImage="/src/assets/ProjectSection2/WhiteArrow.svg"
          bgImageHover="/src/assets/ProjectSection2/HMI/LightBlueArrow.svg"
          MockupImage="/src/assets/ProjectSection2/HMI/HMIMockup.png"
          MockupImageClassName="h-[10vh] sm:h-[25vh] w-auto ml-[5vw] bottom-0"
        />

        <ProjectItem
          name="Other Project"
          icons={[]}
          bgImage="/src/assets/ProjectSection2/WhiteArrow.svg"
          bgImageHover="/src/assets/ProjectSection2/OrangeArrow.svg"
          MockupImage=""
          MockupImageClassName=""
        />
      </div>
    </section>
  );
}
