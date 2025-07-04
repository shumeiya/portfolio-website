import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const ProjectItem = ({
  name,
  icons,
  bgImage,
  bgImageHover,
  MockupImage,
  MockupImageClassName = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconRefs = useRef([]);

  useEffect(() => {
    if (isHovered) {
      const positions = [
        { x: -10, y: -130 },
        { x: 800, y: -100 },
        { x: -400, y: 100 },
        { x: 600, y: 100 },
      ];
      iconRefs.current.forEach((ref, index) => {
        const { x, y } = positions[index % positions.length];
        gsap.to(ref, {
          x,
          y,
          duration: 0.5,
          ease: "back.out(1)",
        });
        gsap.to(ref, {
          y: y - 15,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });
    } else {
      iconRefs.current.forEach((ref) => {
        gsap.killTweensOf(ref);
        gsap.to(ref, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "back.in(1.7)",
        });
      });
    }
  }, [isHovered]);

  const MockupImageRef = useRef();
  useEffect(() => {
    if (!MockupImageRef.current) return;
    gsap.killTweensOf(MockupImageRef.current);
    gsap.to(MockupImageRef.current, {
      opacity: isHovered ? 1 : 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isHovered]);

  const backgroundImage = isHovered ? bgImageHover : bgImage;

  return (
    <div
      className={`relative w-[90vw] h-[9vw] left-1/2 -translate-x-1/2
      transition-all duration-300 flex  justify-start items-center overflow-visible ${
        isHovered ? "z-50" : "z-1"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Floating Icons */}
      {icons.map((icon, i) => (
        <img
          key={i}
          src={icon}
          ref={(el) => (iconRefs.current[i] = el)}
          className={`absolute left-[30vw] w-[7vw] h-[7vw] pointer-events-none transition-opacity ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Mockup Image */}
      <img
        src={MockupImage}
        ref={MockupImageRef}
        className={`absolute left-1/2 -translate-x-1/2
          pointer-events-none ${MockupImageClassName}`}
        style={{ opacity: 0, transition: "opacity 0.05s" }}
      />
      {/* Project Title */}
      <div
        className={`text-[4vw] font-regular pl-[5vw] transition-colors duration-300  ${
          isHovered ? "text-white" : "text-black"
        }`}
      >
        {name}
      </div>
    </div>
  );
};

export default ProjectItem;
