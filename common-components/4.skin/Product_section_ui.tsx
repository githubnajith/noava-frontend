/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import Model_dropdown_ui from "./Model_dropdown_ui";
import Sidecover_ui from "./Sidecover_ui";
import Logocut_ui from "./Logocut_ui";
import Finish_ui from "./Finish_ui";
import BuyNow_ui from "../BuyNow_ui";
import Upload_image from "./Upload_image";
// custom hook
import useGetState from "@/custom-hook/skin/use_getState";
// ---------------------------------------------

const Product_section_ui = ({ skindata, common_data, getAuthState, userUid,customSkin }: any) => {
  const deviceType = common_data?.deviceType?.type;
  const skin_finish = common_data?.finish;
  const product_price = skindata?.inputData?.price;
  const model = common_data?.modelDropdown;
  // ?------------------------------------------------------------------------------------------------------------------
  const [finalPrice, setFinalprice] = useState(product_price);

  // -----------------------------------------------------------------------------------------------------
  // sidecover
  const { getStateLift: mobilecover_state, getState: mobileCover } = useGetState(false);

  // get laptop cover
  const { getStateLift: laptopcover_state, getState: laptopCover } = useGetState(false);
  // --------------------------------------------------------------------------------------------------------

  // hide sidecover on no sides select
  const { getStateLift: getNosideCover, getState: noSidecover } = useGetState(true);

  useEffect(() => {
    if (noSidecover) return;
    setFinalprice(withoutcover_price);
  }, [noSidecover]);

  // -----------------------------------------------------------------------------------------------------
  // brand and model
  const { getStateLift: getBrandName, getState: brandName } = useGetState(null);
  const { getStateLift: getModelName, getState: modelName } = useGetState(null);

  // -------------
  // finish name and price
  const { getStateLift: getFinishName, getState: finishName } = useGetState(null);
  const { getStateLift: get_withoutCover_price, getState: withoutcover_price } = useGetState(null);
  const { getStateLift: get_withcover_price, getState: withcover_price } = useGetState(null);
  // set mobile mobiskin finish price when sidecover state change and skinfinish name change
  useEffect(() => {
    if (!withcover_price && !withoutcover_price) return;
    if (mobileCover) setFinalprice(withcover_price);
    if (!mobileCover) setFinalprice(withoutcover_price);
  }, [mobileCover, finishName]);

  //  set laptop mobile kisn price when sidecover change
  useEffect(() => {
    if (!withcover_price && !withoutcover_price) return;
    if (laptopCover) setFinalprice(withcover_price);
    if (!laptopCover) setFinalprice(withoutcover_price);
  }, [laptopCover]);
  // -----------------------
  // get custom image
  const {getStateLift:getCustomImg,getState:customImage} = useGetState(null)
  // -------------
  // logocut
  const { getStateLift: getLogocut, getState: logocut } = useGetState(false);
  //   ------------------------------------------------------------------------------------

  // product info for order
  const orderInfo = {
    name: skindata?.inputData?.name,
    imageName: skindata?.image?.imageName,
    imageUrl: skindata?.image?.imageUrl,
    price: finalPrice,
    orderTime: new Date().toLocaleString(),
    ...(brandName && { brandName: brandName }),
    ...(modelName && { modelName: modelName }),
    ...(mobileCover && { sideCover: mobileCover }),
    ...(logocut && { logocut: logocut }),
    ...(finishName && { finish: finishName }),
    // ...(customImage && {customImage:customImage})
  };

  // -----------------------------------------------------------------------
  return (
    <>
      <main className="lg:grid lg:grid-cols-2">
        {/* image */}
        <div>
          <img className="w-[400px] h-auto m-auto" src={skindata?.image.imageUrl} loading="lazy" alt={skindata?.image?.imageName} />
        </div>

        <div className="bg-[#EEEEF0] px-10 py-4 sm:px-[6rem] space-y-1">
          <h1 className="text-xl lg:3xl font-bold text-start md:text-left lg:text-start">{skindata?.inputData?.name}</h1>
          <div className="flex items-center justify-between py-2">
            {/* price */}
            <p className="text-3xl	">&#8377; {finalPrice}</p>
          </div>
          {/* ----------------------------------------------------- */}
          {/* choose brand and model */}
          {model && <Model_dropdown_ui model={model} getBrandName={getBrandName} getModelName={getModelName} getLogocut={getLogocut} getNosideCover={getNosideCover} />}
          {/* logocut ---------------- */}
          {logocut && <Logocut_ui getLogocut={getLogocut} />}
          {/* side cover ------------- */}
          {deviceType === "phone" && <Sidecover_ui getSidecover_state={mobilecover_state} deviceType={deviceType} noSidecover={noSidecover} />}
          {deviceType === "laptop" && <Sidecover_ui getSidecover_state={laptopcover_state} deviceType={deviceType} noSidecover={true} />}
          {/* finish ----------------- */}
          {skin_finish && <Finish_ui finish={skin_finish} get_withoutCover_price={get_withoutCover_price} get_withcover_price={get_withcover_price} getFinishName={getFinishName} />}
          {/* ----------------------------------------------------- */}
          {/* upload image */}
          {customSkin &&  <Upload_image getCustomImg={getCustomImg} />}
          {/* ----------------------------------------------------- */}
          <div className="flex items-center justify-between py-3">
            <BuyNow_ui getAuthState={getAuthState} orderInfo={orderInfo} userUid={userUid} model={model && true} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Product_section_ui;
