/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from 'react';

const Logocut_ui = (props:any) => {
  const [logocut, setLogocut] = useState<boolean>(false);
  const addSide_cover = () => setLogocut(true);
  const remove_sideCover = () => setLogocut(false);

  useEffect(()=>{
    props.getLogocut(logocut)
  },[logocut])
  // ---------------
  // mouse click events
  const [zoom1, setZoom1] = useState<boolean>(false);
  const mouseDown1 = () => setZoom1(true);
  const mouseUp1 = () => setZoom1(false);
  // -----
  const [zoom2, setZoom2] = useState<boolean>(false);
  const mouseDown2 = () => setZoom2(true);
  const mouseUp2 = () => setZoom2(false);
  // -------------
  // mobile touch events
  const touchStart1 = () => setZoom1(true);
  const touchEnd1 = () => setZoom1(false);
  // -----
  const touchStart2 = () => setZoom2(true);
  const touchEnd2 = () => setZoom2(false);

  //   -------------------------------
  return (
    <div className='text-black space-y-2 py-3'>
      <span className='text-gray-500 font-semibold'>Logo cutout :</span>
      {/* button */}
      <div className='space-x-1 text-sm '>
        {/* 1.with cover */}
        <div className='inline-block flex-col space-y-2 justify-center items-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/3.skins/logoCut.jpg'
            onMouseDown={mouseDown1}
            onMouseUp={mouseUp1}
            onTouchStart={touchStart1}
            onTouchEnd={touchEnd1}
            className={`w-[70px] border rounded-full mx-auto border-black ${zoom1 && 'scale-[2.5]'}`}
            alt='mobile skins and wraps'
          />
          <button
            onClick={addSide_cover}
            className={` p-2 ${logocut ? 'bg-black text-white' : 'bg-white'} border shadow border-black rounded-full`}
          >
            with logo
          </button>
        </div>
        {/* 2.without cover */}
        <div className='inline-block flex-col space-y-2 justify-center items-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src='/3.skins/fullSkin.jpg'
            onMouseDown={mouseDown2}
            onMouseUp={mouseUp2}
            onTouchStart={touchStart2}
            onTouchEnd={touchEnd2}
            className={`w-[70px] border rounded-full mx-auto border-black ${zoom2 && 'scale-[2.5]'}`}
            alt='mobile skins and wraps'
          />
          <button
            onClick={remove_sideCover}
            className={`p-2 ${!logocut ? 'bg-black text-white' : 'bg-white text-black'} rounded-full  border shadow border-black`}
          >
            without logo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logocut_ui;
// -----------
