// src/components/Hero.jsx
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
    });
    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 20,
      delay: 0.4,
    });
  }, []);

  return (
    <section className="bg-orange-100 min-h-screen flex flex-col items-center justify-center text-center px-4 pt-24">
      {/* Top Navigation */}
      <nav className="absolute top-4 right-4 flex gap-4 text-sm font-medium">
        <a href="#about" className="hover:underline">About Me</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* Name */}
      <h1
        ref={titleRef}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-unbounded text-gray-900 tracking-wide mb-4"
      >
        SHUMEI
      </h1>

      {/* Floating Labels (simplified) */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 text-xs sm:text-sm">
        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full">UX/UI</span>
        <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full">JavaScript</span>
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">HMI Design</span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">HTML</span>
      </div>

      {/* Tagline */}
      <p
        ref={subtitleRef}
        className="max-w-xl text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-gray-700"
      >
        I dream, I design, I create!<br />
        With play 🎮 and flair 🧠, I shape ideas into design.
      </p>

      {/* Signature */}
      <p className="mt-4 text-sm sm:text-base text-gray-600 font-semibold">
        I am Shumi-Ya!
      </p>
    </section>
  );
}
