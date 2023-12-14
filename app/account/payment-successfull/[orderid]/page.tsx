/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useId, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Loading_spinner_ui from "@/common-components/Loading_spinner_ui";
import useHttpWrite from "@/custom-hook/use_http_write";
import { useUserAuth } from "@/custom-hook/use_user_auth";
// ------------------------------------------------------------------
interface Params {
  params: {
    orderid: number;
  };
}

const Payment_successful = ({ params }: Params) => {
  const orderId = params?.orderid;

  const [loading, setLoading] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<null | string>(null);

  // write success in db
  const { uploadInput, uploadComplete } = useHttpWrite();
  const checkOrder = async () => {
    if (!orderId) return;
    setLoading(true);
    const res = await axios.post("/api/order-status", {
      orderId,
    });
    const data = res.data;
    const productData = data?.productData;
    const userId = data?.userId;
    const shippingInfo = data?.shippingInfo;

    if (data?.orderData?.order_status === "PAID" && userId) {
      const baseUrl = `noava/orders/pending/${orderId}`;

      const finalData = {
        productData,
        shippingInfo,
      };

      uploadInput({
        dbUrlPath: baseUrl,
        inputData: finalData,
      });
      setOrderStatus(data?.orderData?.order_status);
      setLoading(false);
    }

    if (data?.order_status === "ACTIVE") {
      setOrderStatus(data?.order_status);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!orderId) return;
    checkOrder();
  }, [orderId]);

  // ------------------------------------------------------------------

  if (loading) {
    return <Loading_spinner_ui label="Payment processing please wait" />;
  }

  if (orderStatus === "ACTIVE") {
    return (
      <>
        <div className="py-2">
          <div className="flex items-center flex-col">
            <img
              className="w-[150px]"
              src="/1.Home/logo/Noava-black-logo.png"
              loading="lazy"
              alt="mobile skins and wraps"
            />
            <main className="py-2 px-2  rounded-xl flex flex-col gap-4 pt-4 items-center">
              <img
                className="w-32"
                src="/5.account/wrong.webp"
                alt="tick icon"
              />
              <h3 className="text-md font-bold text-black pb-4">
                Payment Not Done
              </h3>
            </main>
            <Link
              href="/"
              className="text-center bg-black p-3 text-white rounded-full hover:bg-white hover:text-black border border-black"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  if (orderStatus === "PAID") {
    return (
      <>
        <div className="py-2">
          <div className="flex items-center flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-[150px]"
              src="/1.Home/logo/Noava-black-logo.png"
              loading="lazy"
              alt="mobile skins and wraps"
            />
            <h3 className="text-md font-semibold text-gray-500">
              Payment Confirmation
            </h3>
            <main className="py-2 px-2  rounded-xl flex flex-col gap-4 pt-4 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-32"
                src="/5.account/tickIcon.webp"
                alt="tick icon"
              />
              <h1 className="text-md font-bold text-black">
                Payment Successful
              </h1>
              {/* <p className="font-normal text-gray-500">Order id : &#8377;{params?.orderid}</p> */}
              {/* <p className='font-bold'>
            Amount paid : <span className='text-sky-400'>&#8377;1200</span>
          </p> */}
              <p className="px-2 text-sm text-center text-black font-semibold leading-loose">
                You will receive all the delivery statuses on WhatsApp and
                email.{" "}
              </p>
            </main>
            <Link
              href="/"
              className="text-center bg-black p-3 text-white rounded-full hover:bg-white hover:text-black border border-black"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </>
    );
  }
};

export default Payment_successful;
// -----------------------
