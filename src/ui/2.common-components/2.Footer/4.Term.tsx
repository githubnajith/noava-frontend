import {MdPlayArrow} from 'react-icons/md';
import Link from 'next/link';

const Terms = () => {
  const data = [
    {name: 'Terms and condition', to: '/terms/terms-and-conditions'},
    {name: 'Privacy policy', to: '/terms/privacy-policy'},
    {name: 'Refund policy', to: '/terms/refund-policy'},
    {name: 'Shipping policy', to: '/terms/shipping-policy'},
    {name: 'Copyright', to: '/terms/copyright'},
  ];
  return (
    <section className='bg-black p-4 space-y-4'>
      <h4 className='text-white font-bold '>Terms and Conditions</h4>
      <div className='flex flex-col gap-2  md:flex-row md:items-center md:justify-between text-white pb-2 hover:text-white'>
        {data.map((data) => {
          return (
            <Link
              key={data?.name}
              href={data.to}
            >
              <div className='grid grid-cols-[1.3rem,1fr] items-center'>
                <MdPlayArrow className='text-sm' />
                <h3>{data.name}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Terms;
