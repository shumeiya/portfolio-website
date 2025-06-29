import { useEffect, useRef, cloneElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloatBlock = ({
  children,
  animationDuration = 1,
  ease = "back.out(1.2)",
  scrollStart = "top 85%",
  scrollEnd = "top 60%",
  stagger = 0.02,
  scrub = false,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const charElements = el.querySelectorAll(".float-char");

    gsap.fromTo(
      charElements,
      {
        opacity: 0,
        yPercent: 100,
        scaleY: 2,
        scaleX: 0.8,
        transformOrigin: "50% 100%",
        willChange: "transform, opacity",
      },
      {
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        duration: animationDuration,
        ease,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: scrollStart,
          end: scrollEnd,
          scrub,
        },
      }
    );
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger, scrub]);

  // 拆文字并保留图片
  const wrapNode = (node) => {
    if (typeof node === "string") {
      return node.split("").map((char, idx) => (
        <span key={idx} className="inline-block float-char">
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }

    if (node?.type === "img") {
      return cloneElement(node, {
        className: `${node.props.className || ""} inline-block float-char`,
      });
    }

    if (Array.isArray(node)) {
      return node.map((child, idx) => <span key={idx}>{wrapNode(child)}</span>);
    }

    if (node?.props?.children) {
      return cloneElement(node, {
        children: wrapNode(node.props.children),
      });
    }

    return node;
  };

  return (
    <div ref={containerRef} className="overflow-hidden">
      {wrapNode(children)}
    </div>
  );
};

export default ScrollFloatBlock;
