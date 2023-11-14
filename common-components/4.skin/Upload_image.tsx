/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

const Upload_image = (props:any) => {
  const [img, setImg] = useState<any>(undefined);
  const imageOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImg(e.target.files[0]);
  };

  useEffect(()=>{
if(!img) return
props.getCustomImg(img)
  },[img])
  
  
  // --------------------------------------------
  return (
<div className="flex items-center justify-center w-full py-4">
    <label className={`${img?'bg-white':'bg-green-400'} bg-white flex flex-col items-center justify-center w-full h-28 border-2 border-black border-dashed rounded-lg cursor-pointer  hover:bg-gray-100`}>
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        {!img && <div>
            <svg className="w-8 h-8 mb-4 text-black dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-black"><span className="font-semibold">Click to upload your photo</span></p>
            <p className="text-xs text-black dark:text-gray-400">JPG,PDF or png (MAX. 400x800px)</p>
            </div>}
            {img &&
            <p className="mb-2 text-sm text-black dark:text-gray-400"><span className="font-semibold text-green-500">Photo uploaded</span></p>
            }

        </div>
        <input onChange={imageOnchange} id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
  );
};

export default Upload_image;
