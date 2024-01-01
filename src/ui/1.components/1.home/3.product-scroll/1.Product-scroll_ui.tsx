"use client";
import { useState, useRef, PropsWithChildren } from "react";
// ---------------------------------------------------------------------------------
interface Props {
  title: string;
}
const Product_scroll_ui = (props: PropsWithChildren<Props>) => {
  // --------------------------------------------------
  const sliderRef = useRef<HTMLInputElement>(null);
  const [mouse, setMouse] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const mouseTrue = (event: React.MouseEvent) => {
    event.preventDefault();
    setMouse(true);
    setStartX(event.pageX);
    if (sliderRef.current === null) return;
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const mouseFalse = (event: React.MouseEvent) => {
    event.preventDefault();
    setMouse(false);
  };
  const mouseMove = (event: React.MouseEvent) => {
    event.preventDefault();
    if (!mouse) return;
    if (sliderRef.current === null) return;
    const x = Math.abs(event.pageX - sliderRef.current.offsetLeft);
    const scroll = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - scroll;
  };

  // -----------------------------
  return (
    <section>
      <h1 className="text-center text-2xl font-semibold text-black">{props.title}</h1>
      <div ref={sliderRef} onMouseDown={mouseTrue} onMouseLeave={mouseFalse} onMouseUp={mouseFalse} onMouseMove={mouseMove} className="scroll-smooth shadow gap-5 overflow-x-auto py-4 px-2 whitespace-nowrap space-x-4 cursor-pointer no-scrollbar">
        {props.children}
      </div>

      {/* ---------------------------- */}
    </section>
  );
};
export default Product_scroll_ui;
