"use client";
import { useEffect, useState } from "react";
// icon
import { IoLogoWhatsapp } from "react-icons/io5";
// -------------------------------------------------------
const Whatsapp_icon_ui = () => {
  const [location, setLocation] = useState<any>(undefined);
  useEffect(() => {
    setLocation(window?.location?.href);
  }, []);

  return (
    <>
      <div className="relative">
        {/* whatsapp icons */}
        {location && (
          <a
            href={`https://api.whatsapp.com/send?phone=918608244255&text= + ${location}`}
            target="_blank"
            className="flex justify-center items-center space-x-2 bottom-10 right-2 lg:right-10 fixed z-10 shadow-md p-2 space-y-2 border bg-green-500 border-black rounded-xl"
          >
            <span className="flex items-center justify-center gap-1  tracking-wide text-gray-100 ">
              <IoLogoWhatsapp className="text-3xl text-white" />
            </span>
          </a>
        )}
      </div>
    </>
  );
};

export default Whatsapp_icon_ui;
