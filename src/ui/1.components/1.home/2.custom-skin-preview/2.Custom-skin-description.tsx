import { fetchData } from "@/utils/1.fetch_data";
import Link from "next/link";
// ---------------------------------------------------
const Custom_skin_description = async () => {
  const baseUrl = "noava/home/custom_mobileskin_url";
  const customMobile_detail_link = await fetchData(baseUrl);
  return (
    <div className=" bg-white m-auto w-full lg:px-[10%] flex flex-col items-center">
      <div className="pb-6 space-y-4 lg:space-y-6">
        <div className="text-start space-y-3">
          <h2 className="text-4xl font-bold lg:text-7xl text-black">Custom Skins</h2>
          {/* subheading */}
          <p className="text-sm lg:my-6 lg:text-2xl text-[#FF0000] font-semibold">Upload custom image and preview before print</p>
        </div>
        {customMobile_detail_link && (
          <div className="text-center">
            <Link
              href={customMobile_detail_link?.inputData?.custom_mobileskin_url}
              className="px-8 py-2 bg-black text-white font-semibold rounded-full lg:text-lg 
hover:bg-white hover:text-black border-black  border-2"
            >
              Buy Now
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Custom_skin_description;
