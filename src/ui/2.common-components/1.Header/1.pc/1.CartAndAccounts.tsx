// cart icons
import {IoCartSharp, IoPersonSharp} from 'react-icons/io5';
import Link from 'next/link';
// -----------------------------------------------------
export default function CartAndAccounts() {
  return (
    <div className='text-center flex'>
      {/* 1.cart */}
      {/* <div className='inline-block relative'> */}
        {/* 1.icon - cart */}
        {/* <Link
          href='/'
          className='text-lg peer hover:text-primary flex items-center gap-1'
        > */}
          {/* <IoCartSharp /> */}
          {/* <div className='h-[1rem] w-[2rem] '>
            <p className='text-sm bg-primary rounded-sm  text-black font-semibold'>0</p>
          </div> */}
        {/* </Link> */}
        {/* 2.tooltip - label */}
        {/* <h2 className='rounded w-[4rem] opacity-0 peer-hover:opacity-100 bg-primary text-black absolute right-0 left-0 top-6'>Cart</h2> */}
      {/* </div> */}
      {/*//* ------------------------------------------------ */}
      {/* 2.account */}
      <Link
        href='/account/orders'
        className='relative hidden md:inline-block'
      >
        {/* 1.icon - account */}
        <div className='text-lg peer px-4  hover:text-primary '>
          <IoPersonSharp />
        </div>
        {/* 2.tooltip - label */}
        <h2 className='rounded w-[4rem] opacity-0 peer-hover:opacity-100 bg-primary text-black absolute right-0 left-0 top-6'>Account</h2>
      </Link>
    </div>
  );
}
