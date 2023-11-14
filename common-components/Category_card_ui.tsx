import Link from 'next/link';
export default async function Category_card_ui(props: any) {
  // 2.fetch subcategory data
  // ------------------------------
  return (
    <Link href={props?.link}>
      <div className='flex flex-col  hover:scale-105 shadow-xl rounded-xl'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props?.src}
          alt={props?.alt}
          className='rounded-t-md'
        />
        <div className='flex items-center text-center justify-center'>
          <div className='bg-black text-white py-1 md:py-2  lg:py-3 inline-block px-4 rounded-b-md w-full'>
            <h3 className='text-sm md:text-md lg:text-xl font-bold'> {props?.heading}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
