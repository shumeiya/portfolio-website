import React from "react";
import SlowFoodItem from "../components/ProjectSection2Item/SlowFood.jsx";

export default function ProjectsSection() {
  return (
    <section className="h-[45vh] sm:h-[120vh] w-[100vw] relative py-[25vw] sm:py-[15vw]">
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
            "/src/assets/ProjectSection2/SlowFood/Eggplant.svg",
            "/src/assets/ProjectSection2/SlowFood/Onion.svg",
            "/src/assets/ProjectSection2/SlowFood/Pepper.svg",
            "/src/assets/ProjectSection2/SlowFood/Tomato.svg",
          ]}
        />
        <SlowFoodItem
          name="TIDE Website"
          icons={[
            "/src/assets/ProjectSection2/SlowFood/Eggplant.svg",
            "/src/assets/ProjectSection2/SlowFood/Onion.svg",
            "/src/assets/ProjectSection2/SlowFood/Pepper.svg",
            "/src/assets/ProjectSection2/SlowFood/Tomato.svg",
          ]}
        />
        <SlowFoodItem
          name="JiDu HMI Design"
          icons={[
            "/src/assets/ProjectSection2/SlowFood/Eggplant.svg",
            "/src/assets/ProjectSection2/SlowFood/Onion.svg",
            "/src/assets/ProjectSection2/SlowFood/Pepper.svg",
            "/src/assets/ProjectSection2/SlowFood/Tomato.svg",
          ]}
        />
      </div>
    </section>
  );
}
