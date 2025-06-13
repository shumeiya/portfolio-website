import { useRef, useEffect } from "react";
import { gsap } from "gsap";

// 抽象为可复用的贴纸组件
function FloatingImage({ src, alt, className, duration = 3, amplitude = 10, delay = 0 }) {
  const ref = useRef();

  useEffect(() => {
    gsap.to(ref.current, {
      y: `-${amplitude}%`,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration,
      delay,
    });
  }, [amplitude, duration, delay]);

  return <img ref={ref} src={src} alt={alt} className={className} />;
}

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#FDF9F0] px-4">
      {/* Top Sticker Row */}

      <div className="flex justify-center gap-[12vw]">
        <FloatingImage
          src="/src/assets/hero/UX_UI.png"
          alt="UX/UI"
          className="w-[15vw] h-auto object-contain"
          duration={3}
          amplitude={15}
        />
        <FloatingImage
          src="/src/assets/hero/figma.png"
          alt="Figma"
          className="w-[6vw] h-auto object-contain ml-[20vw] mb-[-2vw]"
          duration={3}
          amplitude={20}
        />
        <FloatingImage
          src="/src/assets/hero/html.png"
          alt="HTML"
          className="w-[12vw] h-auto object-contain -rotate-[-12deg] ml-[3vw]"
          duration={1}
          amplitude={30}
        />
      </div>

      {/* Main Title */}
      <div className="text-[16vw] leading-none font-black text-black font-unbounded mb-6 text-center">
        SHUMEI
      </div>

      {/* Bottom Sticker Row */}
      <div className="flex justify-center gap-[10vw] flex-wrap">
        <FloatingImage
          src="/src/assets/hero/javascript.png"
          alt="JavaScript"
          className="w-[20vw] h-auto object-contain -rotate-[12deg]"
          duration={2}
          amplitude={15}
        />
        <FloatingImage
          src="/src/assets/hero/hmi_design.png"
          alt="HMI Design"
          className="w-[20vw] h-auto object-contain -rotate-[-8deg]"
          duration={3}
          amplitude={10}
        />
      </div>
    </section>
  );
}

  