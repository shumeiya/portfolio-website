import { useState } from "react";
import FallingText from "../blocks/TextAnimations/FallingText/FallingText";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "kekezuiaidesky@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="h-[25vh] sm:h-screen w-[100vw] text-black">
      {/* 顶部箭头 */}
      <img
        src="/src/assets/ContactSection/Arrowline1.svg"
        alt="Top Arrows"
        className="w-[80vw] left-0"
      />

      {/* 中间主内容 */}
      <div className="bg-[#05A552] h-[20vh] sm:h-[90vh] px-10 sm:px-20 flex flex-col gap-8">
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
              className="bg-[#FFC713] text-black
              text-[2vw] sm:text-[3vw] font-semibold px-4 py-2 
              border-2 border-black rounded-lg shadow"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/shumeiya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7A78FF]  text-black 
              text-[2vw] sm:text-[3vw] font-semibold px-4 py-2 
              border-2 border-black rounded-lg shadow"
            >
              Github
            </a>
          </div>
        </div>

        {/* Row 2: 邮箱行 */}
        <div
          className="bg-white text-black px-6 py-[1vw] rounded-xl border-2  border-black
          flex items-center justify-between 
        text-[2vw] sm:text-[3vw] font-bold "
        >
          <span>{email}</span>
          <button
            onClick={handleCopy}
            className="bg-[#05A552] border-2 border-black px-[2vw] py-[0.5vw]"
          >
            <img src="/src/assets/ContactSection/Copy.svg"></img>
          </button>
        </div>

        {/* Row 3: Flex布局 - 左 */}
        <div className="flex flex-col sm:flex-row text-white items-center justify-between mt-6 gap-6">
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

          {/* 右侧头像 */}
          <div className="w-[17vw]">
            <img src="/src/assets/ContactSection/Work.png" alt="Mascot" />
          </div>
        </div>
      </div>

      {/* 底部箭头 */}
      <img
        src="/src/assets/ContactSection/Arrowline2.svg"
        alt="Bottom Arrows"
        className="pl-[20vw]"
      />

      {/* 提示复制成功 */}
      {copied && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-4 py-2 rounded-xl">
          Copied to clipboard!
        </div>
      )}
    </section>
  );
}
