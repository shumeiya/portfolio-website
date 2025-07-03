import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function FolderCard({
  folderBack,
  folderFront,
  folderFrontHover,
  card,
  icons,
  name,
}) {
  const [hover, setHover] = useState(false);

  // 每个 icon 的动画参数
  const iconVariants = [
    { x: "-80%", y: "-10%" },
    { x: "30%", y: "-120%" },
    { x: "80%", y: "20%" },
  ];
  const iconInitialPositions = [
    { left: "20%", top: "-30%" },
    { left: "35%", top: "-35%" },
    { left: "55%", top: "-25%" },
  ];

  return (
    <div className="relative flex flex-col g-3 items-center w-[25vw] h-[25vh]">
      <div
        className="relative flex items-center justify-center bottom-0 w-[30vw] h-[30vh]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        // style={{ width: 320, height: 340, position: "relative" }}
      >
        {/* 文件夹背板，始终不变 */}
        <img
          src={folderBack}
          alt="folder-back"
          className="absolute w-[20vw] h-auto bottom-0  "
        />

        {/* icons 组 */}
        {icons.map((icon, idx) => (
          <motion.img
            key={idx}
            src={icon}
            alt={`icon-${idx}`}
            className="absolute z-20 w-[7vw]"
            style={{
              left: iconInitialPositions[idx].left,
              top: iconInitialPositions[idx].top,
            }}
            animate={
              hover
                ? {
                    x: iconVariants[idx].x,
                    y: iconVariants[idx].y,
                    rotate: 10 - 3 * idx,
                    scale: 1.5,
                  }
                : { x: 0, y: 0, rotate: 0, scale: 1 }
            }
            transition={{ type: "spring", stiffness: 180, damping: 16 }}
          />
        ))}

        {/* 卡片（hover 时浮现） */}
        <AnimatePresence>
          {hover && (
            <motion.img
              src={card}
              alt="card"
              className="absolute w-[15vw] h-auto z-30 shadow-2xl rounded-[0.5vw]
               border-white border-2"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: "-80%", scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 170, damping: 15 }}
            />
          )}
        </AnimatePresence>

        {/* 文件夹前面板，根据 hover 状态切换 */}
        <img
          src={hover ? folderFrontHover : folderFront}
          alt="folder-front"
          className="absolute w-[20vw] h-auto bottom-0 z-40"
        />
      </div>
      {/* 项目名 */}
      <div className="relative w-full text-center text-black font-extrabold text-2xl z-50">
        {name}
      </div>
    </div>
  );
}
