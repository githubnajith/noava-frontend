"use client";
// -----------------
import React, { useState } from "react";
// -----------------
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/vendors/2.redux/store";
import { AppDispatch } from "@/vendors/2.redux/store";
import { rdx_sidecover } from "@/vendors/2.redux/1.skin/skin-slice";
// ?-------------------------------------------------------------------------------
const Sidecover = () => {
  // ----------------------------------------
  const dispatch = useDispatch<AppDispatch>();
  const rdx_modelName = useAppSelector((state) => state.skin_reducer.model_name);
  const rdx_device_type = useAppSelector((state) => state.skin_reducer.get_device_type);
  const rdx_no_sidecover = useAppSelector((state) => state.skin_reducer.get_no_sidecover);
  // ----------------------------------------
  //  data
  const cover_data =
    rdx_device_type === "phone"
      ? {
          title: "Side cover",
          button1: "side covered - Full Body Wrap",
          button2: "without sides - on Back",
        }
      : {
          title: "Top & keyboard",
          button1: "top & keyboard",
          button2: "top only",
        };
  //  ---------------

  const [cover, setCover] = useState<boolean>(false);
  const addSide_cover = () => {
    setCover(true);
    dispatch(rdx_sidecover(true));
  };
  const remove_sideCover = () => {
    setCover(false);
    dispatch(rdx_sidecover(false));
  };

  // mouse click events
  // const [zoom1, setZoom1] = useState<boolean>(false);
  // const mouseDown1 = () => setZoom1(true);
  // const mouseUp1 = () => setZoom1(false);
  // // -----
  // const [zoom2, setZoom2] = useState<boolean>(false);
  // const mouseDown2 = () => setZoom2(true);
  // const mouseUp2 = () => setZoom2(false);
  // // -------------
  // // mobile touch events
  // const touchStart1 = () => setZoom1(true);
  // const touchEnd1 = () => setZoom1(false);
  // // -----
  // const touchStart2 = () => setZoom2(true);
  // const touchEnd2 = () => setZoom2(false);
  // ?-------------------------------------------------------------------------------

  return (
    <>
      {rdx_modelName && (
        <div>
          {cover_data && (
            <section className="py-3">
              <div className="text-black space-y-2">
                <span className="text-gray-500 font-semibold">{cover_data.title} :</span>
                {/* button */}
                <div className="space-x-1 text-sm ">
                  {/* 1.with cover */}
                  {!rdx_no_sidecover && (
                    <div className="inline-block flex-col space-y-2 justify-center items-center">
                      {/* <img
                    //   src={cover_data.image1}
                    src={deviceType === "phone" ? "/3.skins/sideCover.jpeg" : "/3.skins/topKeyboard.webp"}
                    alt="skins and wraps"
                    onMouseDown={mouseDown1}
                    onMouseUp={mouseUp1}
                    onTouchStart={touchStart1}
                    onTouchEnd={touchEnd1}
                    className={`w-[70px] border rounded-full mx-auto border-black ${zoom1 && "scale-[2.5]"}`}
                    loading="lazy"
                  /> */}
                      <button onClick={addSide_cover} className={`p-2 ${cover ? "bg-black text-white" : "bg-white"} border shadow border-black rounded-full`}>
                        {cover_data.button1}
                      </button>
                    </div>
                  )}
                  {/* 2.without cover */}
                  <div className="inline-block flex-col pt-2 lg:pt-0 space-y-2 justify-center items-center">
                    {/* <img
                  // src={cover_data.image2}
                  src={deviceType === "phone" ? "/3.skins/withoutSideCover.jpeg" : "/3.skins/top.webp"}
                  alt="skins and wraps"
                  onMouseDown={mouseDown2}
                  onMouseUp={mouseUp2}
                  onTouchStart={touchStart2}
                  onTouchEnd={touchEnd2}
                  className={`w-[70px] border rounded-full mx-auto border-black ${zoom2 && "scale-[2.5]"}`}
                  loading="lazy"
                /> */}
                    <button onClick={remove_sideCover} className={`p-2 ${!cover ? "bg-black text-white" : "bg-white text-black"} rounded-full  border shadow border-black`}>
                      {cover_data.button2}
                    </button>
                  </div>
                </div>
                {/* <span className="block text-sm py-1">* click the img to zoom</span> */}
              </div>
            </section>
          )}
        </div>
      )}
    </>
  );
};

export default Sidecover;
