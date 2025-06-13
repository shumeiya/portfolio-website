import { useRef, useEffect } from "react";


// 抽象为可复用的贴纸组件
function FloatingImage({ src, alt, className, duration = 3, amplitude = 10, delay = 0 }) {
  const ref = useRef();

  useEffect(() => {

  }, [amplitude, duration, delay]);

  return <img ref={ref} src={src} alt={alt} className={className} />;
}

export default function Contact() {
  return (
    <section >
 
    </section>
  );
}

  