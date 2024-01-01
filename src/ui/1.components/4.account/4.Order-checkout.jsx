"use client";
// -------------------
import { useState, useEffect } from "react";
import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import { useDispatch } from "react-redux";
import { rdx_error_state } from "@/vendors/2.redux/2.account/account_slice";
import { rdx_get_loading } from "@/vendors/2.redux/common/common-slice";
import useUserAuth from "@/hooks/2.common_hook/1.use-user-auth";
// ?---------------------------------------------------------------------
const Order_checkout = (props) => {
  // -----------------------------
  const { orderInfo, shippingInfo } = props;
  const dispatch = useDispatch();
  const { userUid } = useUserAuth();
  // -----------------------------
  const [cashfree, setCashfree] = useState("");
  const cashfree_func = async () => {
    const data = await load({ mode: "sandbox" }); //sandbox (or) production
    setCashfree(data);
    return data;
  };
  useEffect(() => {
    cashfree_func();
  }, []);
  // ----------------------------------
  const buyNow = async () => {
    if (!cashfree && !orderInfo && !shippingInfo) return;
    dispatch(rdx_get_loading(true));
    const res = await axios.post("/api/checkout", {
      price: orderInfo?.price,
      email: shippingInfo?.email,
      whatsappNumber: shippingInfo?.whatsappNum,
      customerId: userUid,
      orderId: orderInfo?.orderId,
    });

    const data = await res.data;
    const checkoutOptions = {
      paymentSessionId: data?.payment_session_id,
      returnUrl: data?.order_meta?.return_url,
    };

    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        dispatch(rdx_error_state(true));
      }
      if (result.redirect) {
        console.log("Redirection");
      }
    });
  };

  // ?---------------------------------------------------------------------

  return (
    <>
      {orderInfo && (
        <>
          <div className="mt-10 bg-gray-50 rounded-xl px-4 pt-8 lg:mt-0 space-y-6 w-full lg:w-1/2">
            <p className="text-xl font-medium">Order Detail</p>
            <div className="">
              {/* <!-- Total --> */}
              <div className="mt-6 border-t border-b py-2 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Product Name</p>
                  <p className="font-semibold text-gray-900">{orderInfo?.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">&#8377;{orderInfo?.price}</p>
                </div>
                {/* ---------------------------- */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">&#8377;50</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">&#8377;{Number(orderInfo?.price) + 50}</p>
              </div>
              <span className="text-sm text-green-700 font-semi-bold block pt-4">* The estimated time of delivery is 2 or 4 working days</span>
              <span className="text-sm block pt-4">* Tax included and shipping calculated at checkout</span>
            </div>
          </div>
          <div className="pb-4 text-start">
            <button onClick={buyNow} className="disabled:opacity-50 mt-4 mb-4 rounded-full w-full bg-gray-900 px-6 py-3 font-medium text-white border border-black hover:bg-white hover:text-black">
              Proceed checkout
            </button>
          </div>
        </>
      )}
    </>
  );
};
export default Order_checkout;
