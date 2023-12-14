const Contact = () => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center">
        {/* contact */}
        <div className="w-full py-4 lg:w-6/12 px-4 space-y-4 text-center">
          <h1 className="text-5xl font-bold text-gray-500">Get in touch</h1>
          <h2 className="font-semibold text-lg text-gray-500">Want to get in touch? We would love to hear from you. Here is how you can reach us...</h2>
        </div>
        {/* image */}
        <div className="w-full lg:w-6/12 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-[300px] object-cover" src="/2.contact/support.jpg" alt="Support image" loading="lazy" />
        </div>
      </div>
      {/* //!------------------------------------------ */}
      {/* contact details phone,email and whatsapp */}
      <div className="grid grid-cols-1 space-y-4 md:grid-cols-2 md:space-y-4 lg:grid-cols-4 py-3 space-x-2 px-4 w-10/12 m-auto">
        {/* phone */}
        <div className="my-auto py-4 text-center space-y-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-[16px] ml-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-[80px] m-auto h-[80px] object-contain" src="/2.contact/mobile.png" alt="Mobile icon" loading="lazy" />
          <h3 className="font-semibold text-gray-500">9363137070</h3>
          <a target="_blank" href="tel:9363137070" className="block bg-blue-500 text-white font-semibold p-3 rounded w-24 m-auto">
            call us
          </a>
        </div>
        {/* whatsapp */}
        <div className="my-auto py-4 text-center space-y-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-[80px] m-auto h-[80px] object-contain" src="/2.contact/whatsapp.png" alt="whatsapp icon" loading="lazy" />
          <h3 className="font-semibold text-gray-500">8608244255</h3>
          <a target="_blank" href="https://wa.me/+918608244255" className="block bg-green-600 text-white font-semibold p-3 rounded w-24 m-auto">
            whatsapp
          </a>
        </div>
        {/* email */}
        <div className="my-auto py-4 text-center space-y-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-[80px] m-auto h-[80px] object-contain" src="/2.contact/gmail.png" alt="Gmail icon" loading="lazy" />
          <h3 className="font-semibold text-gray-500">support@noava.in</h3>
          <a className="block bg-orange-600 text-white font-semibold p-3 rounded w-24 m-auto">Email</a>
        </div>
        {/* email */}
        <div className="my-auto py-4 text-center space-y-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-[80px] m-auto h-[80px] object-contain" src="/2.contact/map.png" alt="map icon" loading="lazy" />
          <h3 className="font-semibold text-gray-500">visit map</h3>
          <a target="_blank" href="https://goo.gl/maps/zjk4UBQXSSrEoW8GA" className="block bg-sky-600 text-white font-semibold p-3 rounded w-24 m-auto">
            map
          </a>
        </div>
      </div>
      {/* ------------------------------------ */}
      {/* address */}
      <div className="my-auto py-4 text-center space-y-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-4 mb-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-[80px] m-auto h-[80px] object-contain" src="/2.contact/map.png" alt="map icon" loading="lazy" />
        <h3 className="font-semibold text-gray-500">Contact Address</h3>
        <div className="text-gray-600 space-y-2  font-semibold shadow-lg inline-block px-4 py-4 border rounded-xl">
          <h3>205</h3>
          <h3>Thiyaki Kumaran Street</h3>
          <h3>R.S.Puram</h3>
          <h3>Coimbatore</h3>
          <h3>Tamilnadu</h3>
          <h3>641 001</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
