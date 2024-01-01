// !Used to client side data fetch from db.Update to redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/vendors/2.redux/store";
import { useEffect } from "react";
import { rdx_get_skin_data, rdx_get_model_data, rdx_get_device_type, rdx_get_finish_data } from "@/vendors/2.redux/1.skin/skin-slice";
// ?----------------------------------------------------------------------
const useFetch_data = (skindata: any, common_data: any) => {
  // ---------------------------------
  const dispatch = useDispatch<AppDispatch>();
  // ---------------------------------
  // if skin data successfully fetched update to redux
  useEffect(() => {
    if (!skindata) return;
    dispatch(rdx_get_skin_data(skindata));
  }, [skindata]);
  // ---------------------------------
  useEffect(() => {
    if (!common_data) return;
    dispatch(rdx_get_model_data(common_data?.modelDropdown));
    dispatch(rdx_get_device_type(common_data?.deviceType?.type));
    dispatch(rdx_get_finish_data(common_data?.finish));
  }, [common_data]);

  // ---------------------------------
};
export default useFetch_data;
