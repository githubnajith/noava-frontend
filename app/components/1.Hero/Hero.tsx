/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="pb-4 md:p-0">
        <main className="">
          <section className="relative md:flex justify-center items-center hidden">
            <div className="absolute w-full h-full bg-gray-600 bg-opacity-50"></div>
            <img className="" src="https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fdesktop%20hero%20%20skins%20and%20wrap.webp?alt=media&token=32ad42d7-b0e7-44f9-848a-b6d857dca8ff" alt="" />
            <div className="absolute text-white flex justify-center items-center flex-col gap-4 translate-y-1/2">
              <h3 className="font-semibold md:text-3xl lg:text-5xl">Anime Collections</h3>
              <Link href="/skin-subcategory/1694010110185/1694010138529" className="bg-black text-white px-5 py-3 hover:bg-white hover:text-black border-2 border-black  rounded-full hover:font-bold">
                Shop Now
              </Link>
            </div>
          </section>
        </main>
        {/* ----------------------------------- */}
        <main className="md:hidden">
          <div className="">
            <img src="https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fmobile%20hero%20skins%20and%20wraps.webp?alt=media&token=a97956c2-c5ef-4d2a-a009-45dd6834cac8" alt="mobile skin" />
            <div className="flex flex-col jusitfy-center items-center -translate-y-1/2 text-white">
              <Link href="/skin-subcategory/1694010110185/1694010138529" className="bg-black text-white py-2 px-4 rounded-full">
                Get Anime
              </Link>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Hero;
