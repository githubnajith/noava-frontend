"use client";
// ----------------
import React, { useState, useEffect } from "react";
import { AppDispatch } from "@/vendors/2.redux/store";
import { useDispatch } from "react-redux";
import { rdx_logo_cut } from "@/vendors/2.redux/1.skin/skin-slice";
// -----------------
import { useAppSelector } from "@/vendors/2.redux/store";
// ?----------------------------------------------------------------------------------
const Logo_cut = (props: any) => {
  // ------------------------------
  const [logocut, setLogocut] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const rdx_isApple = useAppSelector((state) => state.skin_reducer.get_apple);

  // ------------------------------
  const addSide_cover = () => {
    setLogocut(true);
    dispatch(rdx_logo_cut(true));
  };
  const remove_sideCover = () => {
    setLogocut(false);
    rdx_logo_cut(false);
    dispatch(rdx_logo_cut(false));
  };

  // ?----------------------------------------------------------------------------------
  // mouse click events
  // const [zoom1, setZoom1] = useState<boolean>(false);
  // const mouseDown1 = () => setZoom1(true);
  // const mouseUp1 = () => setZoom1(false);
  // // -----
  // const [zoom2, setZoom2] = useState<boolean>(false);
  // const mouseDown2 = () => setZoom2(true);
  // const mouseUp2 = () => setZoom2(false);
  // -------------
  // mobile touch events
  // const touchStart1 = () => setZoom1(true);
  // const touchEnd1 = () => setZoom1(false);
  // // -----
  // const touchStart2 = () => setZoom2(true);
  // const touchEnd2 = () => setZoom2(false);

  //   -------------------------------
  return (
    <>
      {rdx_isApple && (
        <div className="text-black space-y-2 py-3">
          <span className="text-gray-500 font-semibold">Logo cutout :</span>
          {/* button */}
          <div className="space-x-1 text-sm ">
            {/* 1.with cover */}
            <div className="inline-block flex-col space-y-2 justify-center items-center">
              {/* <img src="/3.skins/logoCut.jpg" onMouseDown={mouseDown1} onMouseUp={mouseUp1} onTouchStart={touchStart1} onTouchEnd={touchEnd1} className={`w-[70px] border rounded-full mx-auto border-black ${zoom1 && "scale-[2.5]"}`} alt="mobile skins and wraps" loading="lazy" /> */}
              <button onClick={addSide_cover} className={` p-2 ${logocut ? "bg-black text-white" : "bg-white"} border shadow border-black rounded-full`}>
                with logo
              </button>
            </div>
            {/* 2.without cover */}
            <div className="inline-block flex-col space-y-2 justify-center items-center">
              {/* <img src="/3.skins/fullSkin.jpg" loading="lazy" onMouseDown={mouseDown2} onMouseUp={mouseUp2} onTouchStart={touchStart2} onTouchEnd={touchEnd2} className={`w-[70px] border rounded-full mx-auto border-black ${zoom2 && "scale-[2.5]"}`} alt="mobile skins and wraps" /> */}
              <button onClick={remove_sideCover} className={`p-2 ${!logocut ? "bg-black text-white" : "bg-white text-black"} rounded-full  border shadow border-black`}>
                without logo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Logo_cut;
