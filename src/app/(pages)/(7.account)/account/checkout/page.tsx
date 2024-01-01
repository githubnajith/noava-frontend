"use client";
// -------------------------
import useUserAuth from "@/hooks/2.common_hook/1.use-user-auth";
import Login from "@/ui/2.common-components/5.common/2.Login";
import { fetcher } from "@/utils/client_fetch";
import useSWR from "swr";
import firebase_fetcher from "@/utils/common/1.firebase-fetch";
import useRtk_firebase_fetch from "@/hooks/2.common_hook/2.use_rtk_firebase_fetch";
import Addres_form_input from "@/ui/1.components/4.account/2.Address_form_input";
import Loading_spinner_ui from "@/ui/2.common-components/5.common/1.Loading_spinner_ui";
import Error_ui from "@/ui/2.common-components/5.common/5.Eroor_ui";
import Address_info from "@/ui/1.components/4.account/3.Address_info";
import Order_checkout from "@/ui/1.components/4.account/4.Order-checkout";
import { useAppSelector } from "@/vendors/2.redux/store";
import { useQuery } from "@tanstack/react-query";
// ----------------------------------------------
const Checkout = () => {
  const { userUid } = useUserAuth();
  const rdx_edit_address = useAppSelector((state) => state.account_reducer.edit_address);
  const rdx_error_state = useAppSelector((state) => state.account_reducer.error_state);
  const rdx_checkout_loading = useAppSelector((state) => state.common_reducer.get_loading);
  // --------------
  const { data: shippingInfo } = useSWR(`noava/users/${userUid}/shippingInfo`, fetcher);
  const { data: orderInfo } = useSWR(`noava/users/${userUid}/buyNow`, fetcher);
  //? --------------------------------------------------------------------------------------------------------------
  if (!userUid) {
    return <Login />;
  }
  //? --------------------------------------------------------------------------------------------------------------
  if (!shippingInfo || !orderInfo) {
    return <Loading_spinner_ui label="Loading..." />;
  }
  //? --------------------------------------------------------------------------------------------------------------

  if (rdx_checkout_loading) {
    return <Loading_spinner_ui label="Loading..." />;
  }
  //? --------------------------------------------------------------------------------------------------------------

  if (rdx_error_state) {
    return <Error_ui pageStatus_msg="Error occured" errorMessage="Something went wrong please try agin" />;
  }
  //? --------------------------------------------------------------------------------------------------------------

  if (rdx_edit_address) {
    return <Addres_form_input />;
  }
  //? --------------------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4">
        {/* ------------------------------------------------------- */}
        {/* Checkout */}
        <Order_checkout orderInfo={orderInfo} shippingInfo={shippingInfo} />
        {/* ------------------------------------------------------- */}
        {/* Address */}
        <Address_info shippingInfo={shippingInfo} />
        {/* ------------------------------------------------------- */}
      </div>
    </>
  );
};

export default Checkout;
