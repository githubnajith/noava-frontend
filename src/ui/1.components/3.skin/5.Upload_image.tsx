"use client";
// -----------------
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/vendors/2.redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/vendors/2.redux/store";
import { rdx_get_custom_img } from "@/vendors/2.redux/1.skin/skin-slice";
// ?----------------------------------------------------------------------------------
const Upload_image = () => {
  // -------------------------
  const dispatch = useDispatch<AppDispatch>();
  const [img, setImg] = useState<any>(undefined);
  const rdx_is_custom_skin = useAppSelector((state) => state.skin_reducer.is_custom_img);

  const imageOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const image = e.target.files[0];
    setImg(image);
    dispatch(rdx_get_custom_img(image));
  };

  

  // ?----------------------------------------------------------------------------------
  return (
    <>
      {rdx_is_custom_skin && (
        <div className="flex items-center justify-center w-full py-4">
          <label className={`${img ? "bg-white" : "bg-green-400"} bg-white flex flex-col items-center justify-center w-full h-28 border-2 border-black border-dashed rounded-lg cursor-pointer  hover:bg-gray-100`}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {!img && (
                <div>
                  <svg className="w-8 h-8 mb-4 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                  </svg>
                  <p className="mb-2 text-sm text-black">
                    <span className="font-semibold">Click to upload your photo</span>
                  </p>
                  <p className="text-xs text-black dark:text-gray-400">JPG,PDF or png (MAX. 400x800px)</p>
                </div>
              )}
              {img && (
                <p className="mb-2 text-sm text-black dark:text-gray-400">
                  <span className="font-semibold text-green-500">Photo uploaded</span>
                </p>
              )}
            </div>
            <input onChange={imageOnchange} id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      )}
    </>
  );
};

export default Upload_image;
