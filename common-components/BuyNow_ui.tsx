/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import useHttpWrite from "@/custom-hook/use_http_write";
import useSWR from "swr";
import { fetcher } from "@/util/client_fetch";
import { useUserAuth } from "@/custom-hook/use_user_auth";
import Loading_spinner_ui from "./Loading_spinner_ui";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/config/firebase";
import use_uniqueid_generator from "@/custom-hook/use-uniqueid-generator";
// ----------------------------------------------------------------------

const BuyNow_ui = ({ customImage, orderInfo, getAuthState, upload_state, loading_state, model, customSkin }: any) => {
  const router = useRouter();
  const { userUid } = useUserAuth();
  const [btnDisable, setBtnDisable] = useState<boolean>(false);

  
  // --------------
  const { data } = useSWR(`noava/users/${userUid}/shippingInfo`, fetcher, {
    revalidateIfStale: true,
  });
  // ---------------
  const { uploadInput, uploadComplete, uploadState } = useHttpWrite();
  const buyNow = () => {
    // loading_state(true);
    // create order id
    const uniqueId = use_uniqueid_generator();
    const orderId = `${userUid}_${uniqueId}`;
    // ---------------------
    getAuthState(true);
    if (!userUid) return;
    const baseUrl = `noava/users/${userUid}/buyNow`;
    // ------------------------
    

    if (customImage) {
      upload_state(true);
      loading_state(true);
      const storagePath = `noava/users/customImage/${userUid}`;
      //  1.remove text after . example(.jpg .png)
      const imageName = customImage.name.split(".")[0]; //replace(".png", "");
      const imageRef = storageRef(storage, `${storagePath}/${imageName}`);
      uploadBytes(imageRef, customImage).then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            if (!url) return;
            const orderData = {
              name: orderInfo?.name,
              imageUrl: orderInfo?.imageUrl,
              price: orderInfo?.price,
              orderTime: orderInfo?.orderTime,
              orderId: orderId,
              ...(orderInfo?.brandName && { brandName: orderInfo?.brandName }),
              ...(orderInfo?.modelName && { modelName: orderInfo?.modelName }),
              ...(orderInfo?.mobileCover && {
                sideCover: orderInfo?.mobileCover,
              }),
              ...(orderInfo?.logocut && { logocut: orderInfo?.logocut }),
              ...(orderInfo?.finish && { finish: orderInfo?.finish }),
              ...(url && { customImage: url }),
            };
            uploadInput({
              dbUrlPath: baseUrl,
              inputData: orderData,
            });
          })
          .then(() => {
            if (!data) {
              router.push("/account/user-address");
            }
            if (data) {
              router.push("/account/checkout");
            }
          });
      });
    }
    // ------------------------
    if (customImage) return;
    const orderData = {
      name: orderInfo?.name,
      imageUrl: orderInfo?.imageUrl,
      price: orderInfo?.price,
      orderTime: orderInfo?.orderTime,
      orderId: orderId,
      ...(orderInfo?.brandName && { brandName: orderInfo?.brandName }),
      ...(orderInfo?.modelName && { modelName: orderInfo?.modelName }),
      ...(orderInfo?.mobileCover && { sideCover: orderInfo?.mobileCover }),
      ...(orderInfo?.logocut && { logocut: orderInfo?.logocut }),
      ...(orderInfo?.finish && { finish: orderInfo?.finish }),
    };
    uploadInput({
      dbUrlPath: baseUrl,
      inputData: orderData,
    });
  };

  // --------------------------------
  useEffect(() => {
    loading_state(uploadState);
  }, [uploadState]);

  // --------------------------------
  // btn disable
  const modelList = model;
  const modelName = orderInfo?.modelName;

  useEffect(() => {
    if (!modelList) return;
    if (!modelName) setBtnDisable(true);
    if (modelName) setBtnDisable(false);
  }, [modelList, modelName]);

  useEffect(() => {
    if (!customSkin) return;
    if (!customImage) setBtnDisable(true);
    if (customImage) setBtnDisable(false);
  }, [customImage, modelName]);

  // --------------------------------

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
  // const [location, setLocation] = useState<any>(undefined);
  // useEffect(() => {
  //   setLocation(window?.location?.href);
  // }, []);

  // -----------------------------------------------------------

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <button disabled={btnDisable} onClick={buyNow} className="p-4 disabled:opacity-50 flex items-center justify-center gap-2 font-bold bg-[#FFBB00] rounded-3xl">
        <IoCartSharp /> Buy Now
      </button>
      {/* <a
            href={`https://api.whatsapp.com/send?phone=918608244255&text= + ${location}`}
            target="_blank"
            className="p-4 disabled:opacity-50 flex items-center justify-center gap-2 font-bold bg-[#FFBB00] rounded-3xl"
          >
       Buy Now
          </a> */}
      {modelList && !modelName && <span className="text-sm  text-red-500 font-semibold block">* Choose model before buy</span>}
      {customSkin && !customImage && <span className="text-sm  text-red-500 font-semibold block">* Upload Photo before buy</span>}
    </div>
  );
};

export default BuyNow_ui;
