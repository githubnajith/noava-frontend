import React from "react";

const About = () => {
  return (
    <section className="grid md:grid-cols-2 py-4 shadow-md">
      <div className="m-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className=" w-full h-[500px] object-cover rounded-xl" alt="about us" src="https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fassets%2Fabout%20us.jpg?alt=media&token=078a5774-a72b-4ac6-a663-5debefe657a5" loading="lazy" />
      </div>
      <div className="px-6 py-4  flex flex-col items-center justify-center">
        <div className="space-y-3">
          <h3 className="text-xl text-center lg:text-start text-gray-600 font-bold">About Us</h3>
          <p className="text-md  text-gray-500 leading-8">NOAVA Mobile Skin & Wrap is a company that specializes in customizing mobile skins and wraps. They provide an extensive selection of design options to personalize and safeguard your mobile devices. Utilizing top-notch materials and precise printing techniques, they produce durable and one-of-a-kind skins and wraps. Their meticulous attention to detail guarantees a seamless fit and a fashionable appearance for your device.</p>
        </div>
      </div>
    </section>
  );
};
export default About;
