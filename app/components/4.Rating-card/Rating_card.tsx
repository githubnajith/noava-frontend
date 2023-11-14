// icons
import {IoStar, IoStarHalf} from 'react-icons/io5';
// ---------------------------------------------
const RatingCard = () => {
  return (
    <div className='flex items-center justify-center py-4 bg-gray-100 gap-6 flex-wrap'>
      {/*//! google*/}
      <div className='h-[22rem] w-full mx-6 lg:mx-0 md:w-[15rem] flex flex-col items-center justify-center text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-5 py-4 border bg-white rounded-xl px-6'>
        {/* 1.section */}
        <div>
          {/* section 1 */}
          <div className='h-[8rem] flex flex-col items-center justify-center m-auto'>
            <h3 className='font-bold text-5xl text-gray-800'>4.6</h3>
            <h3 className='font-semibold text-gray-700'>Out of 5 stars</h3>
            <div className='text-xl pb-4 flex w-full items-center justify-center text-yellow-500 pt-4'>
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarHalf />
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-10 mx-auto'
            src='/1.Home/google-logo.png'
            loading='lazy'
            alt='google logo'
          />
          <h3 className='text-gray-500 font-semibold pb-7 pt-6'>Reviews from google revies</h3>
          <a
            href='https://www.google.com/search?q=noava+mobile+skins+coimbatore&ei=To2vZJH3H_7UseMP04e-iAU&ved=0ahUKEwiR1q2v-4qAAxV-amwGHdODD1EQ4dUDCBA&uact=5&oq=noava+mobile+skins+coimbatore&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIKCCEQoAEQwwQQCjoCCCY6DQghEKABEMMEEAoQiwNKBAhBGAFQiA9YoxpgqxtoAnAAeACAAdkBiAHSCJIBBTAuNC4ymAEAoAEBuAECwAEB&sclient=gws-wiz-serp#lrd=0x3ba859c4d4ce55e3:0xc5bb33c70b9bfda9,1,,,,'
            target='_blank'
            className='py-3 px-4 border-2 text-md border-orange-600 text-orange-600 font-medium	rounded-md shadow-lg hover:text-white hover:bg-orange-600'
          >
            Read Our reviews
          </a>
          <h3 className='pt-6 text-md text-gray-500 font-semibold'>
            Powered by <span className='text-[#4681e6]'>G</span>
            <span className='text-[#d43034]'>o</span>
            <span className='text-[#ecbc0d]'>o</span>
            <span className='text-[#4681e6]'>g</span>
            <span className='text-[#3ab451]'>l</span>
            <span className='text-[#d43034]'>e</span>
          </h3>
        </div>
      </div>
      {/* //!instagram */}
      <div className='h-[22rem] w-full mx-6 md:w-[15rem] lg:mx-0 lg:w-[15rem] flex flex-col items-center justify-center text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-5 py-4 border bg-white rounded-xl px-6'>
        {/* 1.section */}
        <div>
          {/* section 1 */}
          <div className='h-[8rem] flex flex-col items-center justify-center m-auto'>
            <h3 className='font-bold text-5xl text-gray-800'>5000+</h3>
            <h3 className='font-semibold text-gray-700'>5000+ Customers</h3>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-10 mx-auto'
            src='https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fassets%2Finstagram-logo.png?alt=media&token=7cb21786-2901-4c58-8662-2f5e6323ea76'
            loading='lazy'
            alt='instagram logo'
          />
          <h3 className='text-gray-500 font-semibold pb-7 pt-6'>From Instagram</h3>
          <a
            href='https://www.instagram.com/stories/highlights/17943728276221969/'
            target='_blank'
            className='py-3 px-4 border-2 text-md border-pink-600 text-pink-600 font-medium	rounded-md shadow-lg hover:text-white hover:bg-pink-600'
          >
            View
          </a>
          <h3 className='pt-6 text-md text-gray-500 font-semibold'>
            Powered by <span className='text-[#b62f99]'>Instagram</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
