/* eslint-disable @next/next/no-img-element */
// -------------------------------------------------
const Instagram_gallery = () => {
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Fmobile%20skins%201.jpg?alt=media&token=31a286e7-5ce2-4761-bc8b-6ea2b0016031",
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Fmobile%20charger%20skins%202.webp?alt=media&token=494c4641-405b-4b9f-93ad-588571f890b3",
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Flaptop%20skins%203.webp?alt=media&token=8cb99359-4f7c-4346-918f-d25bafe610f5",
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Fearbuds%20skins%204.webp?alt=media&token=766e112b-dc17-412e-8877-9b33679a0ef3",
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Fmobile%20skins%205.webp?alt=media&token=69253c4c-1c73-42ba-a848-2c0efcf81498",
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Fleather%20mobile%20skins.webp?alt=media&token=5d2bd47d-5d99-4dc6-9e7d-027080002c7e",
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Fmobile%20skins%20and%20charger%20skins%206.webp?alt=media&token=8ed11b37-bebd-430f-83eb-36008e093f22",
    "https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Finstargram_gallery%2Flaptop%20keyboard%20skins%208.webp?alt=media&token=5526231a-b502-4d30-9344-f0c443ed88e7",
  ];
  // -----------------------------------------
  return (
    <>
      <section className="py-4 flex flex-col items-center justify-center shadow-lg">
        <div className="flex items-center justify-center space-x-2 w-full">
          <div className="w-full flex-nowrap  flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-14" src={"/1.Home/instagramLogo.png"} alt="mobile skin" loading="lazy" />
            <div className="flex flex-col flex-nowrap">
              <h3 className="text-xl font-bold text-black">#NOAVA ON INSTA</h3>
              <span className="block text-sm">FOLLOW US FOR MORE UPDATES</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 px-2 py-2">
          {images?.map((data) => {
            return (
              <div key={data}>
                <img className="lg:h-[300px] lg:w-[300px] max-w-full rounded-lg object-cover" src={data} alt="noava skins" loading="lazy" />
              </div>
            );
          })}
        </div>
        {/* -------------- */}
        <a href="https://www.instagram.com/stories/highlights/17943728276221969/" target="_blank" className="flex justify-center items-center shadow-md p-2 border-2 bg-black text-white rounded-full border-black hover:bg-white hover:text-black">
          Follow us
        </a>
      </section>
    </>
  );
};

export default Instagram_gallery;
