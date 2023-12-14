/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
const Finish_ui = (props: any) => {
  // finish
  const skin_finish = props.finish;
  const [outline, setOutline] = useState<number>(0);
  const [finishName, setFinishName] = useState<string>("");

  // ------------------------
  // set default finish
  useEffect(() => {
    if (!skin_finish) return;
    const key = Object.keys(skin_finish);
    const finishName = skin_finish[key[0]]?.inputData?.finishName;
    const withoutCover_price = skin_finish[key[0]]?.inputData?.withoutCoverPrice;
    const withCover_price = skin_finish[key[0]]?.inputData?.withCoverPrice;
    // set finish name
    setFinishName(finishName)
    // get data
    props.getFinishName(finishName);
    props.get_withoutCover_price(withoutCover_price);
    props.get_withcover_price(withCover_price);
  }, [skin_finish]);

  // ------------------------

  const finishClick = (skinName: string, withoutCover_price: number, withCover_price: number, index: number) => () => {
    setOutline(index);
    // set finish name
    setFinishName(skinName)
    // get data
    props.getFinishName(skinName);
    props.get_withoutCover_price(withoutCover_price);
    props.get_withcover_price(withCover_price)
  };

  // !---------------------------------------------------------------------------
  return (
    <div className="py-2 space-y-4">
      <span className="text-gray-500 font-semibold">FINISH: </span>
      <span className="text-sm font-semibold bg-black border rounded-full text-white border-black p-2 shadow">{finishName ? finishName : "choose finish"}</span>
      <div className="flex space-x-2">
        {/* default matte finish */}
        {skin_finish &&
          Object.keys(skin_finish).map((key, index) => {
            return (
              <>
                <img loading="lazy" key={key} className={`rounded-full w-[70px] ring ring-white ${index === outline && "outline  outline-black"}`} alt="skins and wraps" src={skin_finish[key]?.image?.imageUrl} onClick={finishClick(skin_finish[key]?.inputData?.finishName, skin_finish[key]?.inputData?.withoutCoverPrice, skin_finish[key]?.inputData?.withCoverPrice, index)} />
              </>
            );
          })}
      </div>
    </div>
  );
};
export default Finish_ui;
// ----------------
import { useState, useEffect } from "react";
