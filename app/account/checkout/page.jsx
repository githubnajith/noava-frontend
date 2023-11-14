/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useEffect, useState } from "react";
import Login_ui from "@/common-components/5.orders/Login_ui";
import { fetcher } from "@/util/client_fetch";
import useSWR from "swr";
import EditAddress_ui from "@/common-components/5.orders/EditAddress_ui";
import { load } from "@cashfreepayments/cashfree-js";
import axios from "axios";

// ----------------------------------------------
const Checkout = () => {
  // auth----------
  const [userAuth, setUserAuth] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => user && setUserAuth(user));
  }, [userAuth]);
  // --------------
  const { data: shippingInfo, mutate } = useSWR(`noava/users/${userAuth.uid}/shippingInfo`, fetcher, {
    revalidateIfStale: false,
    revalidateOnMount: false,
  });

  const { data: orderInfo } = useSWR(`noava/users/${userAuth.uid}/buyNow`, fetcher, {
    revalidateIfStale: false,
    revalidateOnMount: false,
  });

  // -------------------------------------------------------------
  const [editAddress, setEditAddress] = useState(false);
  const [editComplete, setEditComplete] = useState(false);
  const getEditState = (editState) => setEditComplete(editState);
  useEffect(() => {
    if (!editComplete) return;
    setEditAddress(false);
    mutate();
  }, [editComplete]);
  // -------------------------------------------------------------
  const [cashfree, setCashfree] = useState("");
  const cashfree_func = async () => {
    const data = await load({ mode: "production" }); //sandbox (or) production
    setCashfree(data);
    return data;
  };
  useEffect(() => {
    cashfree_func();
  }, []);

  const buyNow = async () => {
    if (!cashfree && !orderInfo && !data) return;
    const res = await axios.post("/api/checkout", {
      price: orderInfo?.price,
      email: shippingInfo?.email,
      whatsappNumber: shippingInfo?.whatsappNum,
    });
    const data = await res.data;
    const checkoutOptions = {
      paymentSessionId: data?.payment_session_id,
      returnUrl: data?.order_meta?.return_url,
    };
    cashfree.checkout(checkoutOptions).then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
      if (result.redirect) {
        console.log("Redirection");
      }
    });
  };
  // -------------------------------------------------------------

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      {editAddress && <EditAddress_ui getEditState={getEditState} />}
      {!userAuth && (
        <div className="text-center">
          <Login_ui noRedirect={true} />
        </div>
      )}
      {/* Address */}
      {shippingInfo && (
        <>
          {!editAddress && (
            <div className="mt-10 bg-gray-50 rounded-xl px-4 pt-8 lg:mt-0 space-y-6 w-full lg:w-1/2">
              <p className="text-xl font-medium">Shipping Details</p>
              <div className="">
                <div className="mt-6 border-t border-b py-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Name</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.name}</p>
                  </div>
                  {/* ---------------------------- */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Whatsapp Number</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.whatsappNum}</p>
                  </div>
                  {/* ---------------------------- */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.email}</p>
                  </div>
                  {/* ---------------------------- */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Door No</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.doorNo}</p>
                  </div>
                  {/* ---------------------------- */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Street</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.street}</p>
                  </div>
                  {/* ---------------------------- */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Landmark</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.landmark}</p>
                  </div>
                  {/* ---------------------------- */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">City</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.city}</p>
                  </div>
                  {/* ---------------------------- */}
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Pincode</p>
                    <p className="font-semibold text-gray-900">{shippingInfo?.pincode}</p>
                  </div>
                </div>
              </div>
              <div className="pb-4 text-center">
                <button onClick={() => setEditAddress(true)} className="disabled:opacity-50 mt-1 mb-1  rounded-full w-54 bg-gray-900 px-6 py-3 font-medium text-white border border-black hover:bg-white hover:text-black">
                  Edit Address
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {/* Checkout */}
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
                  <p className="font-semibold text-gray-900">&#8377;0</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">&#8377;{orderInfo?.price}</p>
              </div>
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
    </div>
  );
};

export default Checkout;
