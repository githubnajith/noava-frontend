/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// ------------------------
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "@/vendors/2.redux/store";
import useFetch_data from "@/hooks/1.hook/1.skin/6.use-fetchData";
import useUserAuth from "@/hooks/2.common_hook/1.use-user-auth";
import useRtk_firebase_fetch from "@/hooks/2.common_hook/2.use_rtk_firebase_fetch";
import { rdx_is_custom_img } from "@/vendors/2.redux/1.skin/skin-slice";
// ------------------------
import Skin_description from "@/ui/1.components/2.products/Skin_description";
import Whatsapp_icon from "@/ui/2.common-components/5.common/3.Whatsapp_icon";
import Login from "@/ui/2.common-components/5.common/2.Login";
import Loading_spinner_ui from "@/ui/2.common-components/5.common/1.Loading_spinner_ui";
import Product_section from "@/ui/1.components/3.skin/1.Product-section";
//? --------------------------------------------------------------------------------------------------------
interface Params {
  params: {
    maincat_id: string;
    subcat_id: string;
    product_id: string;
  };
}
//? --------------------------------------------------------------------------------------------------------

export default function Page({ params }: Params) {
  // ---------------------------------
  const dispatch = useDispatch<AppDispatch>();
  const baseUrl = `noava/products/skins/products/${params?.maincat_id}/${params?.subcat_id}/${params?.product_id}`;
  const commonUrl = `noava/products/skins/maincategory/commonData/${params?.maincat_id}`;
  const rdx_login_state = useAppSelector((state) => state.common_reducer.get_user_login_state);
  const rdx_loading = useAppSelector((state) => state.common_reducer.get_loading);
  const { userUid } = useUserAuth();
  // ---------------------------------
  // !send data to redux
  useEffect(() => {
    dispatch(rdx_is_custom_img(false));
  }, []);

  // ----------------------------------
  const { isLoading: common_loading, data: common_data, isError: common_isError, error: common_error } = useRtk_firebase_fetch(commonUrl, params?.maincat_id);
  const { isLoading: skin_loading, data: skindata, isError: skin_isError, error: skin_error } = useRtk_firebase_fetch(baseUrl, params?.product_id);
  useFetch_data(skindata, common_data);
  useFetch_data(skindata, common_data);
  //? --------------------------------------------------------------------------------------------------------
  return (
    <>
      {/* ----------------------------------------------- */}
      {rdx_loading && <Loading_spinner_ui label="Loading" />}
      {/* ----------------------------------------------- */}
      <div className={rdx_login_state && !userUid ? "block" : "hidden"}>
        <Login />
      </div>

      {/* ----------------------------------------------- */}
      <div className={rdx_login_state && !userUid ? "hidden" : "block"}>
        {/* ----------------------------------------------- */}
        {/* 1.whats app icon */}
        <Whatsapp_icon />
        {/* ----------------------------------------------- */}
        <div>
          {/* ---------------------------------------------- */}
          {/* 2.product section  */}
          <Product_section />
          {/* ---------------------------------------------- */}
          {/* 3.product description */}
          <Skin_description />
          {/* ---------------------------------------------- */}
        </div>
      </div>
      {/* ---------------------------------------------- */}
    </>
  );
}
