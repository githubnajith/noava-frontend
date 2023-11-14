import React from "react";
import Link from "next/link";
interface Params {
  params: {
    orderid: number;
  };
}
const Payment_successful = ({ params }: Params) => {

  return (
    <div className="py-2">
      <div className="flex items-center flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-[150px]" src="/1.Home/logo/Noava-black-logo.png" loading="lazy" alt="mobile skins and wraps" />
        <h3 className="text-md font-semibold text-gray-500">Payment Confirmation</h3>
        <main className="py-2 px-2  rounded-xl flex flex-col gap-4 pt-4 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="w-32" src="/5.account/tickIcon.webp" alt="tick icon" />
          <h1 className="text-md font-bold text-black">Payment Successful</h1>
          <p className="font-normal text-gray-500">Order id : &#8377;{params?.orderid}</p>
          {/* <p className='font-bold'>
            Amount paid : <span className='text-sky-400'>&#8377;1200</span>
          </p> */}
          <p className="px-2 text-sm text-center text-black font-semibold leading-loose">You will receive all the delivery statuses on WhatsApp and email. </p>
        </main>
        <Link href="/" className="text-center bg-black p-3 text-white rounded-full hover:bg-white hover:text-black border border-black">
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default Payment_successful;
// -----------------------
