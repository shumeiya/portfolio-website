import React from "react";
import SlowFoodItem from "../components/ProjectSection2Item/SlowFood.jsx";

export default function ProjectsSection() {
  return (
    <section className="h-[35vh] sm:h-[120vh] w-[100vw] relative pt-[30vw] sm:py-[15vw]">
      <div className="flex flex-col justify-center">
        <SlowFoodItem
          name="SlowFood"
          icons={[
            "/src/assets/ProjectSection2/SlowFood/Eggplant.svg",
            "/src/assets/ProjectSection2/SlowFood/Onion.svg",
            "/src/assets/ProjectSection2/SlowFood/Pepper.svg",
            "/src/assets/ProjectSection2/SlowFood/Tomato.svg",
          ]}
        />
        <SlowFoodItem
          name="Jigsaw Puzzle App"
          icons={[
            "/src/assets/ProjectSection2/JigsawPuzzle/1.svg",
            "/src/assets/ProjectSection2/JigsawPuzzle/2.svg",
            "/src/assets/ProjectSection2/JigsawPuzzle/3.svg",
            "/src/assets/ProjectSection2/JigsawPuzzle/4.svg",
          ]}
        />
        <SlowFoodItem
          name="TIDE Website"
          icons={[
            "/src/assets/ProjectSection2/TIDE/1.svg",
            "/src/assets/ProjectSection2/TIDE/2.svg",
            "/src/assets/ProjectSection2/TIDE/3.svg",
            "/src/assets/ProjectSection2/TIDE/4.svg",
          ]}
        />
        <SlowFoodItem
          name="JiDu HMI Design"
          icons={[
            "/src/assets/ProjectSection2/HMI/1.svg",
            "/src/assets/ProjectSection2/HMI/2.svg",
            "/src/assets/ProjectSection2/HMI/3.svg",
            "/src/assets/ProjectSection2/HMI/4.svg",
          ]}
        />
      </div>
    </section>
  );
}
