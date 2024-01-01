"use client";
// -------------------
import { IoCartSharp } from "react-icons/io5";
import { useAppSelector } from "@/vendors/2.redux/store";
import useBuyNow_btn_disable from "@/hooks/1.hook/1.skin/2.use-buyNow-btn-disable";
import useCustom_skin_buy_now from "@/hooks/1.hook/1.skin/3.use-custom-skin-buyNow";
import useBuy_now from "@/hooks/1.hook/1.skin/4.use-buyNow";
//? --------------------------------------------------------------------------------------------------------------------

const Buy_now = () => {
  // --------------------------------------
  const rdx_modelName = useAppSelector((state) => state.skin_reducer.model_name);
  const rdx_custom_img = useAppSelector((state) => state.skin_reducer.get_custom_img);
  const rdx_model_data = useAppSelector((state) => state.skin_reducer.get_model_data);
  const rdx_is_custom_skin = useAppSelector((state) => state.skin_reducer.is_custom_img);
  // ------------------------------
  // !If product is custom skin this function will upload image to server and store data to database as a order
  const { buyNow: custom_skin_buyNow } = useCustom_skin_buy_now(rdx_custom_img);
  // !If product is normal skin store data to database as a order
  const { buyNow: skin_buyNow } = useBuy_now();
  // ------------------------------
  const buyNow = () => {    
    custom_skin_buyNow();
    skin_buyNow();
  };

  // ------------------------------

  // ! This hook used to get btn diabled or not for if model name not found or custom img not found
  const btn_disable = useBuyNow_btn_disable();
  // --------------------------------

  // -----------------------------------------------------------
  // const [location, setLocation] = useState<any>(undefined);
  // useEffect(() => {
  //   setLocation(window?.location?.href);
  // }, []);

  //? --------------------------------------------------------------------------------------------------------------------

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <button disabled={btn_disable} onClick={buyNow} className="p-4 disabled:opacity-50 flex items-center justify-center gap-2 font-bold bg-[#FFBB00] rounded-3xl">
        <IoCartSharp /> Buy Now
      </button>
      {/* <a
            href={`https://api.whatsapp.com/send?phone=918608244255&text= + ${location}`}
            target="_blank"
            className="p-4 disabled:opacity-50 flex items-center justify-center gap-2 font-bold bg-[#FFBB00] rounded-3xl"
          >
       Buy Now
          </a> */}
      {rdx_model_data && !rdx_modelName && <span className="text-sm  text-red-500 font-semibold block">* Choose model before buy</span>}
      {rdx_is_custom_skin && !rdx_custom_img && <span className="text-sm  text-red-500 font-semibold block">* Upload Photo before buy</span>}
    </div>
  );
};

export default Buy_now;
