/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import useHttpWrite from "@/custom-hook/use_http_write";
import useSWR from "swr";
import { fetcher } from "@/util/client_fetch";
import { useUserAuth } from "@/custom-hook/use_user_auth";

const BuyNow_ui = (props: any) => {
  const router = useRouter();
  const { userUid } = useUserAuth();
  const [btnDisable, setBtnDisable] = useState<boolean>(false);
  // --------------
  const { data } = useSWR(`noava/users/${userUid}/shippingInfo`, fetcher, {
    revalidateIfStale: false,
  });
  // ---------------
  const { uploadInput, uploadComplete } = useHttpWrite();
  const buyNow = () => {
    props?.getAuthState(true);
    if (!props?.userUid) return;
    const baseUrl = `noava/users/${userUid}/buyNow`;
    uploadInput({
      dbUrlPath: baseUrl,
      inputData: props?.orderInfo,
    });
  };

  // btn disable
  const modelList = props?.model;
  const modelName = props?.orderInfo?.modelName;

  useEffect(() => {
    if (!modelList) return;
    if (!modelName) setBtnDisable(true);
    if (modelName) setBtnDisable(false);
  }, [modelList, modelName]);

  useEffect(() => {
    if (!uploadComplete) return;
    if (!data) {
      router.push("/account/user-address");
    }
    if (data) {
      router.push("/account/checkout");
    }
  }, [uploadComplete]);
  // -----------------------------------------------------------
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <button disabled={btnDisable} onClick={buyNow} className="p-4 disabled:opacity-50 flex items-center justify-center gap-2 font-bold bg-[#FFBB00] rounded-3xl">
        <IoCartSharp /> Buy Now
      </button>
      {btnDisable && <span className="text-sm  text-red-500 font-semibold block">* Choose model before buy</span>}
    </div>
  );
};

export default BuyNow_ui;
