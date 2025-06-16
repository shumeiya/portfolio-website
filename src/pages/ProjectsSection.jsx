import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [
    "/src/assets/ProjectSection/1.png",
    "/src/assets/ProjectSection/2.png",
    "/src/assets/ProjectSection/3.png",
    "/src/assets/ProjectSection/4.png",
    "/src/assets/ProjectSection/5.png",
  ];

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const getImage = (offset) => {
    const newIndex = (index + offset + images.length) % images.length;
    return images[newIndex];
  };

  return (
    <section className="bg-[#FDF9F0] h-[25vh] sm:h-screen">
      {/* 顶部斜标签条 */}
      <img
        src="/src/assets/ProjectSection/Line1.svg"
        alt="Slanted Tag Bar"
        className="rotate-[-5deg]"
      />

      {/* 项目展示区域 */}
      <div className="relative w-full h-[25vh] sm:h-[80vh] flex items-center justify-center">
        {/* 左侧图片（模糊） */}
        <motion.img
          key={`left-${getImage(-1)}`}
          src={getImage(-1)}
          className="absolute -left-10 w-[18vw] h-[12vw] 
        opacity-90 blur-xs rotate-[8deg] rounded-xl z-0 pointer-events-none"
          initial={{ x: -100, scale: 0.9 }}
          animate={{ x: 0, scale: 0.9 }}
          exit={{ x: 0 }}
          transition={{ duration: 0.4 }}
        />
        {/* 左箭头 */}
        <button onClick={() => paginate(-1)} className="z-10">
          <img
            src="/src/assets/ProjectSection/Arrow.svg"
            className="w-[6vw] h-auto pr-[1.2em]"
          />
        </button>

        {/* 中间轮播图片 */}
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={images[index]}
            src={images[index]}
            className="w-[50vw] h-[30vw] object-cover rounded-3xl 
              border-2 z-10 shadow-lg"
            initial={{
              x: direction > 0 ? 300 : -300,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0, scale: 0.95 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
          />
        </AnimatePresence>

        {/* 右箭头 */}
        <button onClick={() => paginate(1)} className="z-10">
          <img
            src="/src/assets/ProjectSection/Arrow.svg"
            className="w-[6vw] h-auto rotate-180 pr-[1.2em]"
          />
        </button>

        {/* 右侧图片（模糊） */}
        <motion.img
          key={`right-${getImage(1)}`}
          src={getImage(1)}
          className="absolute -right-10 w-[18vw] h-[12vw] 
        pacity-90 blur-xs rotate-[5deg] rounded-xl z-0 pointer-events-none"
          initial={{ x: 100, scale: 0.9 }}
          animate={{ x: 0, scale: 0.9 }}
          exit={{ x: 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* 底部圆点指示器 */}
        <div className="absolute bottom-[5%] flex gap-2 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-[1.5vw] h-[1.5vw] rounded-full border-1 ${
                i === index ? "bg-blue-500" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
      {/* 底部反向斜标签条 */}
      <img
        src="/src/assets/ProjectSection/Line2.svg"
        alt="Slanted Tag Bar Bottom"
        className="rotate-[5deg] mt-8"
      />
    </section>
  );
}
