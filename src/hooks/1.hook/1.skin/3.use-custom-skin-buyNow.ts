// !If product is custom skin this function will upload image to server and store data to database as a order
import useHttpWrite from "@/custom-hook/use_http_write";
import use_uniqueid_generator from "@/custom-hook/use-uniqueid-generator";
import useUserAuth from "@/hooks/2.common_hook/1.use-user-auth";
import { storage } from "@/vendors/1.firebase/firebase";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAppSelector } from "@/vendors/2.redux/store";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import { fetcher } from "@/utils/client_fetch";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/vendors/2.redux/store";
import { rdx_get_loading } from "@/vendors/2.redux/common/common-slice";
import { useEffect } from "react";
import { rdx_get_login_state } from "@/vendors/2.redux/common/common-slice";
// ?--------------------------------------------------------------------
const useCustom_skin_buy_now = (custom_img: any) => {
  // -----------------------
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { userUid } = useUserAuth();
  const { uploadInput, uploadComplete, uploadStatus } = useHttpWrite();
  const baseUrl = `noava/users/${userUid}/buyNow`;
  const storagePath = `noava/users/customImage/${userUid}`;
  const rdx_skin_data = useAppSelector((state) => state.skin_reducer.get_skin_data);
  const rdx_logo_cut = useAppSelector((state) => state.skin_reducer.logo_cut);
  const rdx_sidecover = useAppSelector((state) => state.skin_reducer.side_cover);
  const rdx_brandName = useAppSelector((state) => state.skin_reducer.brand_name);
  const rdx_modelName = useAppSelector((state) => state.skin_reducer.model_name);
  const rdx_custom_img = useAppSelector((state) => state.skin_reducer.get_custom_img);
  const rdx_is_custom_skin = useAppSelector((state) => state.skin_reducer.is_custom_img);
  const rdx_final_price = useAppSelector((state) => state.skin_reducer.get_price);
  // -----------------------
  const { data: shipping_data } = useSWR(`noava/users/${userUid}/shippingInfo`, fetcher, {
    revalidateIfStale: true,
  });
  // -----------------------

  const buyNow = () => {
    if (!userUid) dispatch(rdx_get_login_state(true));
    if (!userUid || !rdx_is_custom_skin) return;
    // ! set loading state to true
    // set trigger login
    dispatch(rdx_get_loading(true));
    // create order id
    const uniqueId = use_uniqueid_generator();
    const orderId = `${userUid}_${uniqueId}`;
    // --------------
    const imageName = custom_img.name.split(".")[0]; //replace(".png", "") - remove text after . example(.jpg .png)
    const imageRef = storageRef(storage, `${storagePath}/${imageName}`);
    uploadBytes(imageRef, rdx_custom_img).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        if (!url) return;
        const orderData = {
          name: rdx_skin_data?.inputData?.name,
          imageUrl: rdx_skin_data?.image?.imageUrl,
          price: rdx_final_price,
          orderTime: new Date().toLocaleString(),
          orderId: orderId,
          ...(rdx_brandName && { brandName: rdx_brandName }),
          ...(rdx_modelName && { modelName: rdx_modelName }),
          ...(rdx_sidecover && { sideCover: rdx_sidecover }),
          ...(rdx_logo_cut && { logocut: rdx_logo_cut }),
          ...(url && { customImage: url }),
        };
        uploadInput({
          dbUrlPath: baseUrl,
          inputData: orderData,
        });
      });
    });
  };

  // -----------------------
  useEffect(() => {
    if (!uploadComplete) return;
    if (!shipping_data) {
      router.push("/account/user-address");
      dispatch(rdx_get_loading(false));
    }
    if (shipping_data) {
      router.push("/account/checkout");
      dispatch(rdx_get_loading(false));
    }
  }, [uploadComplete]);

  // -----------------------
  return { buyNow };
};
export default useCustom_skin_buy_now;
