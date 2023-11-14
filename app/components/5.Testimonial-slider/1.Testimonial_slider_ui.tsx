'use client';

import React, {FunctionComponent, PropsWithChildren, useEffect, useRef, useState} from 'react';

// ---------------------------------------------
const TestimonialSliderUi: FunctionComponent<PropsWithChildren> = ({children}) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState<number>(0);
  const [parentWidth, setParentWidth] = useState<number>(0);

  // const parentDiv = document.getElementById('parentDiv')! as HTMLDivElement;
  // console.log(parentDiv);

  // list width set functions
  const setListWidth = () => {
    const parent = parentRef.current;
    if (!parent) return;
    const parentWidth = Math.round((95 / 100) * parent.clientWidth);
    setParentWidth(parentWidth);
    const list = parent?.children as HTMLCollection;

    // set width to the list
    for (const item of list) {
      const newItem = item as HTMLElement;
      newItem.style.width = parentWidth + 'px';
    }
  };

  // set list width on initial load
  useEffect(() => {
    setListWidth();
  }, []);
  //set list width on window resizing
  useEffect(() => {
    window.addEventListener('resize', () => {
      setListWidth();
    });
  }, []);

  // mouse functions
  const mouseDown = (event: React.MouseEvent) => {
    event.preventDefault();
    setStartX(event.pageX);
  };

  const mouseUp = (event: React.MouseEvent) => {
    event.preventDefault();
    if (startX < event.pageX) {
      parentRef.current!.scrollLeft = parentRef.current!.scrollLeft - parentWidth;
    }
    if (startX > event.pageX) {
      parentRef.current!.scrollLeft = parentRef.current!.scrollLeft + parentWidth;
    }
  };

  return (
    <div
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      ref={parentRef}
      id='parentDiv'
      className='snap-x snap-mandatory scroll-smooth whitespace-nowrap space-x-2 overflow-x-auto no-scrollbar cursor-pointer w-full lg:m-auto lg:w-[100%]'
    >
      {children}
    </div>
  );
};

export default TestimonialSliderUi;
