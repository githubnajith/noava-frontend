import {MdPlayArrow} from 'react-icons/md';
import Link from 'next/link';
// --------------------------------------------
const Links = () => {
  const data = [
    {name: 'Home', to: '/'},
    {name: 'Skins', to: '/skin/maincategory'},
    {name: 'Contact', to: '/contact'},
  ];
  return (
    <section className='bg-black p-4 space-y-4'>
      <h4 className='text-white font-bold'>Links</h4>
      <div className='flex items-center justify-between text-white pb-2 hover:text-white'>
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
export default Links;
