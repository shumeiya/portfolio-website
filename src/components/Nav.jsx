import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CircularText from "../blocks/TextAnimations/CircularText/CircularText";

const SECTIONS = ["about", "projects", "contact"];

export default function Nav() {
  const location = useLocation();
  const [active, setActive] = useState("");

  // 监听页面滚动，判断哪个 section 在视图中
  useEffect(() => {
    // 如果当前在 /projects 页面，直接高亮 projects，不用监听滚动
    if (location.pathname === "/projects") {
      setActive("projects");
      return;
    }
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      let current = "";
      for (const id of SECTIONS) {
        if (id === "projects") continue; // projects 不参与滚动监听
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= scrollPos) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始运行一次
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <header className="w-full h-28 flex items-center justify-between px-20 fixed top-[1vw] z-50 bg-transparent">
      {/* Left Circular Text Logo */}
      <div>
        <CircularText
          text="Shumei*Design*"
          spinDuration={10}
          onHover="speedUp"
          className="text-black text-sm z-50"
        />
      </div>

      {/* Right Navigation with SVG background */}
      <div className="relative w-[500px] h-[100px]">
        <img
          src="/src/assets/Nav/NavBg.svg"
          alt="Navigation Background"
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 flex items-center justify-around h-full text-white font-bold px-6">
          {SECTIONS.map((id) =>
            id === "projects" ? (
              <Link
                key={id}
                to="/projects"
                className={`px-4 py-2 rounded-full transition-all duration-150 ${
                  location.pathname === "/projects"
                    ? "bg-white text-black border-t-2 border-green-500"
                    : "hover:bg-white/10"
                }`}
              >
                Projects
              </Link>
            ) : (
              <a
                key={id}
                href={`#${id}`}
                className={`px-4 py-2 rounded-full transition-all duration-150 ${
                  active === id
                    ? "bg-white text-black border-t-2 border-green-500"
                    : "hover:bg-white/10"
                }`}
              >
                {id === "about"
                  ? "About Me"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
}
