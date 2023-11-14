import CartAndAccounts from './1.CartAndAccounts';
import Link from 'next/link';
import LogoUi from '@/common-components/3.Logo-ui/Logo_ui';
// ------------------------------------------
export default function PcHeader() {
  return (
    <header className={`bg-black text-white flex items-center justify-around py-4`}>
      {/* 1.logo */}
      <LogoUi className='inline-block' />
      {/* -------------------------------------------- */}
      {/* 2.desktop nav */}
      <nav className='text-base'>
        <div className='lg:space-x-[2rem] flex'>
          <Link
            href='/skin-maincategory'
            className='hover:text-primary'
          >
            Skins
          </Link>
          <Link
            href='/contact'
            className='hover:text-primary'
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* -------------------------------------------- */}
      {/* 4.icons cart,account */}
      <CartAndAccounts />
    </header>
  );
}
