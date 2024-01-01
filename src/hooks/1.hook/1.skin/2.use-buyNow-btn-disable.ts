// ! This hook used to get btn diabled or not for if model name not found or custom img not found
import { useEffect, useState } from "react";
import { useAppSelector } from "@/vendors/2.redux/store";
// ?---------------------------------------------------------------------
const useBuyNow_btn_disable = () => {
  // ------------------------
  const [btn_disable, setBtn_disable] = useState(false);
  const rdx_modelName = useAppSelector((state) => state.skin_reducer.model_name);
  const rdx_custom_img = useAppSelector((state) => state.skin_reducer.get_custom_img);
  const rdx_model_data = useAppSelector((state) => state.skin_reducer.get_model_data);
  const rdx_is_custom_skin = useAppSelector((state) => state.skin_reducer.is_custom_img);
  // ------------------------
  // disbale button on no model found
  useEffect(() => {
    if (!rdx_model_data) return;
    if (!rdx_modelName) setBtn_disable(true);
    if (rdx_modelName) setBtn_disable(false);
  }, [rdx_model_data, rdx_modelName]);
  //   ------------------------
  // disbale button on no custom image found
  useEffect(() => {
    if (!rdx_is_custom_skin) return;
    if (!rdx_custom_img) setBtn_disable(true);
    if (rdx_custom_img) setBtn_disable(false);
  }, [rdx_custom_img, rdx_modelName]);
  //   ------------------------
  return btn_disable;
};
export default useBuyNow_btn_disable;
