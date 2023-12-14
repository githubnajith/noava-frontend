"use client";
// react
import React, { useState } from "react";
// --------------------------------------------

const Page = () => {
  const [image, setImage] = useState("");
  const imageOnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) setImage(URL.createObjectURL(e.target.files[0]));
  };
  // ----------------------------------
  return (
    <div className="py-4">
      <h1 className="text-[#FF0000] text-2xl font-semibold pb-4 text-center">Hi &#128075; upload your photo here</h1>
      <div className="relative mx-auto border-gray-800 dark:border-gray-500 bg-gray-300 border-[2px] rounded-[2.5rem] h-[500px] w-[250px]">
        <input onChange={imageOnchangeHandler} type="file" accept="image/*" className="h-full absolute z-10 opacity-0  w-full outline rounded-xl" />
        {!image && (
          <div className="absolute text-2xl font-bold text-center top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 p-2  px-3 ">
            Your <br /> Design <br /> Here
          </div>
        )}
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-500 absolute -left-[5px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[5px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[5px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[4px] bg-gray-800 dark:bg-gray-800 absolute -right-[5px] top-[142px] rounded-r-lg"></div>

        {/* here */}
        <div className="absolute h-[100px] w-[100px] rounded-full m-3 flex justify-center items-center">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fassets%2Fbackcamera.webp?alt=media&token=f7ceebc6-c380-41c0-8572-12427d6eb4a8" loading="lazy" alt="camera icon" />
        </div>

        {image && (
          <>
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} className="w-[250px] h-[495px] object-cover rounded-[40px]" alt="user upload image" loading="lazy" />
          </>
        )}
      </div>
      <div className="bg-grey-lighter flex justify-center items-center py-2">
        <label className="py-3 px-6 flex flex-col items-center justify-center rounded-full bg-[#FF0000] border-black text-black hover:bg-white  font-semibold tracking-wide uppercase border-2 cursor-pointer">
          <span className="text-base leading-normal">&#128248; Upload a image</span>
          <input onChange={imageOnchangeHandler} type="file" accept="image/*" className="hidden" />
        </label>
      </div>
    </div>
  );
};
export default Page;
// -----------------------------------------------------------------------------
