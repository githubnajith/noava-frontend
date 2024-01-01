import Buy_now from "./2.Buy-now";
import Logo_cut from "./3.Logo-cut";
import Model_dropdown_ui from "@/ui/2.common-components/5.common/4.Model_dropdown_ui";
import Sidecover from "./4.Sidecover";
import Upload_image from "./5.Upload_image";
import Finish from "./6.Finish";
// -----------------
import { useAppSelector } from "@/vendors/2.redux/store";
import useGet_price from "@/hooks/1.hook/1.skin/1.use-get-price";
import { useQuery } from "@tanstack/react-query";
//? --------------------------------------------------------------------------------------------------------------------

const Product_section = () => {
  // ---------------------------
  const skindata = useAppSelector((state) => state.skin_reducer.get_skin_data);
  const rdx_price = useAppSelector((state) => state.skin_reducer.get_price);
  // ---------------------------
  //   !This hook ueed to send product price to redux & calculate price based on sidecover change and skin change
  useGet_price(skindata?.inputData?.price);
  //? --------------------------------------------------------------------------------------------------------------------

  return (
    <main className="lg:grid lg:grid-cols-2">
      {/* image */}
      <div>
        <img className="w-[400px] h-auto m-auto" src={skindata?.image?.imageUrl} loading="lazy" alt={skindata?.image?.imageName} />
      </div>

      <div className="bg-[#EEEEF0] px-10 py-4 sm:px-[6rem] space-y-1">
        <h1 className="text-xl lg:3xl font-bold text-start md:text-left lg:text-start">{skindata?.inputData?.name}</h1>
        {/* ----------------------------------------------------- */}
        {/* price */}
        <div className="flex items-center justify-between py-2">{rdx_price && <p className="text-3xl	">&#8377; {rdx_price}</p>}</div>
        {/* ----------------------------------------------------- */}
        {/* choose brand and model */}
        <Model_dropdown_ui />
        {/* ----------------------------------------------------- */}
        {/* logocut*/}
        <Logo_cut />
        {/* ----------------------------------------------------- */}
        {/* side cover*/}
        <Sidecover />
        {/* ----------------------------------------------------- */}
        {/* finish */}
        <Finish />
        {/* ----------------------------------------------------- */}
        {/* upload image */}
        <Upload_image />
        {/* ----------------------------------------------------- */}
        {/* buy now */}
        <div className="flex items-center justify-between py-3">
          <Buy_now />
        </div>
        {/* ----------------------------------------------------- */}
      </div>
    </main>
  );
};

export default Product_section;
