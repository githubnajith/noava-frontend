/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Skin_description_ui from "@/common-components/4.skin/Skin_description_ui";
import Whatsapp_icon_ui from "@/common-components/Whatsapp_icon_ui";
import Product_section_ui from "@/common-components/4.skin/Product_section_ui";
import { fetcher } from "@/util/client_fetch";
import useSWR from "swr";
import Login_ui from "@/common-components/5.orders/Login_ui";
import { useEffect, useState } from "react";
import { useUserAuth } from "@/custom-hook/use_user_auth";
// ------------------------------------
interface Params {
  params: {
    maincat_id: string;
    subcat_id: string;
    product_id: string;
  };
}

export default function Page({ params }: Params) {
  const baseUrl = `noava/products/skins/products/${params?.maincat_id}/${params?.subcat_id}/${params?.product_id}`;
  const commonUrl = `noava/products/skins/maincategory/commonData/${params?.maincat_id}`;

  const { data: skindata } = useSWR(baseUrl, fetcher);
  const { data: common_data } = useSWR(commonUrl, fetcher);

  // ---------------------------------
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const { userUid } = useUserAuth();
  const getAuthState = (userState: boolean) => {
    if (userUid) return;
    setShowLogin(userState);
  };
  useEffect(() => {
    if (userUid) return;
    window.scroll(0, 0);
    setShowLogin(showLogin);
  }, [showLogin]);
  useEffect(() => {
    if (!userUid) return;
    setShowLogin(false);
  }, [userUid]);
  // -------------------------------------------------
  return (
    <>
      <div className={showLogin ? "hidden" : "block"}>
        {/* 1.whats app icon ----------------------------- */}
        <Whatsapp_icon_ui />
        {/* 2.product section ---------------------------- */}
        {skindata && <Product_section_ui skindata={skindata} common_data={common_data} getAuthState={getAuthState} userUid={userUid} />}
        {/* 3.product description */}
        <Skin_description_ui />
      </div>
      {/* ---------------------------------------------- */}
      {/* login ui */}
      {showLogin && !userUid && <Login_ui />}
    </>
  );
}
