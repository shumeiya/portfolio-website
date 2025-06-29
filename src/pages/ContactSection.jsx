import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FallingText from "../blocks/TextAnimations/FallingText/FallingText";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "kekezuiaidesky@gmail.com";

  const topArrowRef = useRef(null);
  const bottomArrowRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!topArrowRef.current || !bottomArrowRef.current) return;

    // 顶部蓝色箭头从左侧进入
    gsap.fromTo(
      topArrowRef.current,
      { x: "-100%" },
      {
        x: "0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: topArrowRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

    // 底部橙色箭头从右侧进入
    gsap.fromTo(
      bottomArrowRef.current,
      { x: "100%" },
      {
        x: "0%",
        ease: "power2.out",
        scrollTrigger: {
          trigger: bottomArrowRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="h-[25vh] sm:h-screen w-[100vw] text-black relative">
      {/* 顶部箭头 */}
      <img
        ref={topArrowRef}
        src="/src/assets/ContactSection/Arrowline1.svg"
        alt="Top Arrows"
        className="w-[80vw] left-0"
      />

      {/* 中间主内容 */}
      <div className="bg-[#05A552] sm:h-[90vh] h-[60vh]  px-10 sm:px-20 flex flex-col gap-8 relative">
        {/* Row 1: 标题 + 两个按钮 */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h2 className="text-[3vw] sm:text-[7vw] font-extrabold">
            Contact Me!
          </h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/shumei-zhang-5a8612231/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFC713] text-black text-[2vw] sm:text-[3vw] font-semibold px-4 py-2 
              border-2 border-black rounded-lg shadow"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/shumeiya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7A78FF] text-black text-[2vw] sm:text-[3vw] font-semibold px-4 py-2 
              border-2 border-black rounded-lg shadow"
            >
              Github
            </a>
          </div>
        </div>

        {/* Row 2: 邮箱行*/}
        <div className="relative w-full">
          <div
            className="bg-white text-black px-6 py-[1vw] rounded-xl border-2 border-black
            flex items-center justify-between w-full
            text-[2vw] sm:text-[3vw] font-bold"
          >
            <span>{email}</span>
            <button
              onClick={handleCopy}
              className="bg-[#05A552] border-2 border-black px-[2vw] py-[0.5vw]"
            >
              <img src="/src/assets/ContactSection/Copy.svg" alt="Copy" />
            </button>
          </div>

          {/* 提示复制成功 */}
          {copied && (
            <div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2
              bg-black text-white text-sm sm:text-lg px-4 py-2 rounded-xl z-50 shadow-lg"
            >
              Copied to clipboard!
            </div>
          )}
        </div>

        {/* Row 3: 左侧文字 + 右侧人物 */}
        <div className="flex  h-[20vh] sm:flex-row text-white items-center justify-between mt-[8vw] gap-6">
          <FallingText
            text={`Interactive Critical Collaboration Teamwork Empathy`}
            highlightWords={["Interactive"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="3rem"
            mouseConstraintStiffness={0.9}
          />
          <div className="w-[17vw]">
            <img src="/src/assets/ContactSection/Work.png" alt="Mascot" />
          </div>
        </div>
      </div>

      {/* 底部箭头 */}
      <img
        ref={bottomArrowRef}
        src="/src/assets/ContactSection/Arrowline2.svg"
        alt="Bottom Arrows"
        className="pl-[20vw]"
      />
    </section>
  );
}
