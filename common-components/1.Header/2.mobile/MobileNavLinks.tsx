'use client';
// ui
import LogoUi from '@/common-components/3.Logo-ui/Logo_ui';
import CartAndAccounts from '../1.pc/1.CartAndAccounts';
// react icons
import {useEffect, useState} from 'react';
import {IoMenuSharp, IoCloseSharp} from 'react-icons/io5';
// router
import Link from 'next/link';
// -----------------------------------
interface Props {
  getData: (data: boolean) => void;
}
const MobilenavLinks = ({getData}: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const open = () => setShow(true);
  const close = () => setShow(false);

  useEffect(() => {
    getData(show);
  }, [getData, show]);

  // -------------------------------------------------------
  return (
    <header>
      <div className='bg-black relative py-4 text-white px-8 flex pt-3 overflow-hidden border-b border-white'>
        <div className={`flex md:w-0 w-[10%] ${!show && 'items-center'}`}>
          {!show ? (
            <IoMenuSharp
              onClick={open}
              className='text-lg hover:text-primary'
            />
          ) : (
            <IoCloseSharp
              onClick={close}
              className='text-lg hover:text-primary'
            />
          )}
        </div>
        {<div className='w-[80%] flex items-center justify-center md:0'>{<LogoUi />}</div>}
        {/* ----------------------------------------------------- */}
        <div
          onClick={close}
          className={`w-[10%] md:w-0 flex ${!show && 'items-center'}`}
        >
          <CartAndAccounts />
        </div>
      </div>
      {show && (
        <nav className={`flex py-2 flex-col text-center space-y-4 items-center bg-black w-full text-white`}>
          <Link
            onClick={close}
            href='/skin-maincategory'
            className='hover:text-primary'
          >
            Skins
          </Link>
          {/* <Link
            onClick={close}
            href='/accessories/subcategory'
            className='hover:text-primary'
          >
            Accessories
          </Link> */}
          <Link
            onClick={close}
            href='/contact'
            className='hover:text-primary'
          >
            Contact
          </Link>
          <Link
            onClick={close}
            href='/account/orders'
            className='hover:text-primary'
          >
            Account
          </Link>
        </nav>
      )}
    </header>
  );
};

export default MobilenavLinks;
