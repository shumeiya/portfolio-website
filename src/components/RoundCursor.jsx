import React, { useEffect } from "react";

// 临时 mock useUser（只在本组件文件中有效）
const useUser = () => {
  return {
    cursorMessage: null, // 或者 "Click me" 等测试文字
  };
};

const BlendeCursor = () => {
  const { cursorMessage } = useUser();

  useEffect(() => {
    const followCursor = (e) => {
      const cursor = document.querySelector("#cursor-blende");

      const left = e.clientX - 15;
      const top = e.clientY - 15;
      cursor.style.left = left + "px";
      cursor.style.top = top + "px";

      let baseScale = 1;
      if (window.getComputedStyle(e.target).cursor === "pointer") {
        baseScale = 3;
      } else if (cursorMessage) {
        baseScale = 4;
      }

      cursor.dataset.baseScale = baseScale; // base scale
      cursor.style.transform = `scale(${baseScale})`;
    };

    const cursorScaleDown = () => {
      const cursor = document.querySelector("#cursor-blende");
      const baseScale = parseFloat(cursor.dataset.baseScale || "1");
      cursor.style.transform = `scale(${baseScale * 0.75})`;
    };

    const cursorScaleNormal = () => {
      const cursor = document.querySelector("#cursor-blende");
      const baseScale = parseFloat(cursor.dataset.baseScale || "1");
      cursor.style.transform = `scale(${baseScale})`;
    };

    document.addEventListener("mousemove", followCursor);
    document.addEventListener("mousedown", cursorScaleDown);
    document.addEventListener("mouseup", cursorScaleNormal);

    return () => {
      document.removeEventListener("mousemove", followCursor);
      document.removeEventListener("mousedown", cursorScaleDown);
      document.removeEventListener("mouseup", cursorScaleNormal);
    };
  }, [cursorMessage]);

  return (
    <div
      id="cursor-blende"
      className="rounded-full bg-white w-8 h-8 fixed pointer-events-none mix-blend-difference flex items-center justify-center"
      style={{
        transform: cursorMessage ? "scale(4)" : "translate(-50%, -50%)",
        zIndex: 9999,
        transition: "transform 0.2s ease-in-out",
      }}
    >
      <div
        className="w-7 h-7 text-wrap  flex items-center justify-center"
        style={{
          transform: "scale(1)", // Fixes the scale of the text
          fontSize: "10px", // Set a fixed font size here
        }}
      >
        {cursorMessage && (
          <p
            className="text-black text-center font-bold"
            style={{ fontSize: "5px" }}
          >
            {cursorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default BlendeCursor;
