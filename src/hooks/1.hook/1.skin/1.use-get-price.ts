  //   !This hook ueed to send product price to redux & calculate price based on sidecover change and skin change
import { useEffect } from "react";
// --------------
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/vendors/2.redux/store";
import { useAppSelector } from "@/vendors/2.redux/store";
import { rdx_get_price } from "@/vendors/2.redux/1.skin/skin-slice";
// ?-----------------------------------------------------------------
const useGet_price = (price: string) => {
  //   -------------------------------------
  const dispatch = useDispatch<AppDispatch>();
  const rdx_no_sidecover = useAppSelector((state) => state.skin_reducer.get_no_sidecover);
  const rdx_without_cover_price = useAppSelector((state) => state.skin_reducer.without_cover_price);
  const rdx_with_cover_price = useAppSelector((state) => state.skin_reducer.with_cover_price);
  const rdx_sidecover_state = useAppSelector((state) => state.skin_reducer.side_cover);
  const rdx_price = useAppSelector((state) => state.skin_reducer.get_price);
  //   -------------------------------------
  // send price to redux
  useEffect(() => {
    if (!price) return;
    dispatch(rdx_get_price(price));
  }, [price]);
  //   -------------------------------------

  // change price sidecover on no sides select
  useEffect(() => {
    if (!rdx_no_sidecover) return;
    dispatch(rdx_get_price(rdx_price));
  }, [rdx_no_sidecover]);
  //   -------------------------------------
  //   change price on sidecover change
  useEffect(() => {
    if (rdx_sidecover_state) {
      dispatch(rdx_get_price(rdx_with_cover_price));
    }
    if (!rdx_sidecover_state) {
      dispatch(rdx_get_price(rdx_without_cover_price));
    }
  }, [rdx_sidecover_state]);
  //   -------------------------------------
};
export default useGet_price;
