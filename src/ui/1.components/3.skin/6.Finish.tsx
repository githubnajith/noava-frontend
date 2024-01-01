"use client";
// ----------------
// ! This component is hidden.But only needed for data purpose and later usage.Do not delete
// ----------------------------------------------------
import { useState, useEffect } from "react";
import { useAppSelector } from "@/vendors/2.redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/vendors/2.redux/store";
import { rdx_with_cover_price, rdx_without_cover_price } from "@/vendors/2.redux/1.skin/skin-slice";
// ?------------------------------------------------------------------------------------
const Finish = () => {
  // --------------------------
  const dispatch = useDispatch<AppDispatch>();
  const rdx_skin_finish = useAppSelector((state) => state.skin_reducer.get_finish_data);
  const [outline, setOutline] = useState<number>(0);
  const [finishName, setFinishName] = useState<string>("");
  // ------------------------
  // set default finish
  useEffect(() => {
    if (!rdx_skin_finish) return;
    const key = Object.keys(rdx_skin_finish);
    const finishName = rdx_skin_finish[key[0]]?.inputData?.finishName;
    const withoutCover_price = rdx_skin_finish[key[0]]?.inputData?.withoutCoverPrice;
    const withCover_price = rdx_skin_finish[key[0]]?.inputData?.withCoverPrice;
    // set finish name
    setFinishName(finishName);
    // get data
    // props.getFinishName(finishName);
    // props.get_withoutCover_price(withoutCover_price);
    // props.get_withcover_price(withCover_price);
    dispatch(rdx_with_cover_price(withCover_price));
    dispatch(rdx_without_cover_price(withoutCover_price));
  }, [rdx_skin_finish]);

  // ------------------------

  const finishClick = (skinName: string, withoutCover_price: number, withCover_price: number, index: number) => () => {
    setOutline(index);
    // set finish name
    setFinishName(skinName);
    // get data
    // props.getFinishName(skinName);
    // props.get_withoutCover_price(withoutCover_price);
    // props.get_withcover_price(withCover_price);
  };

  // ?------------------------------------------------------------------------------------
  return (
    <div className={`hidden py-2 space-y-4`}>
      <span className="text-gray-500 font-semibold">FINISH: </span>
      <span className="text-sm font-semibold bg-black border rounded-full text-white border-black p-2 shadow">{finishName ? finishName : "choose finish"}</span>
      <div className="flex space-x-2">
        {/* default matte finish */}
        {rdx_skin_finish &&
          Object.keys(rdx_skin_finish)?.map((key, index) => {
            return (
              <>
                <img loading="lazy" key={key} className={`rounded-full w-[70px] ring ring-white ${index === outline && "outline  outline-black"}`} alt="skins and wraps" src={rdx_skin_finish[key]?.image?.imageUrl} onClick={finishClick(rdx_skin_finish[key]?.inputData?.finishName, rdx_skin_finish[key]?.inputData?.withoutCoverPrice, rdx_skin_finish[key]?.inputData?.withCoverPrice, index)} />
              </>
            );
          })}
      </div>
    </div>
  );
};
export default Finish;
