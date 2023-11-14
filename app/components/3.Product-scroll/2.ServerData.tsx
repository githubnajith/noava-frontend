import {FunctionComponent} from 'react';
import Link from 'next/link';

interface Props {
  data: any;
}

const ServerData: FunctionComponent<Props> = ({data}) => {
  // console.log(data);
  // link: '/skin_Product_detail/1694010110185/1694010840073/1694019106467',
  return (
    <>
      {data &&
        Object.keys(data).map((key) => {
          return (
            <Link
              href={data[key].inputData?.link}
              key={key}
              className='text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] inline-block pb-4 rounded-lg lg:hover:border hover:border-black'
            >
              <div className=' py-4 w-[200px] flex items-center justify-center m-auto'>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data[key]?.image?.imageUrl}
                  loading='lazy'
                  alt={data[key]?.image?.imageName}
                  className='w-[180px] h-[180px] object-cover'
                />
              </div>
              <h3 className='text-gray-700 overflow-ellipsis overflow-hidden font-semibold w-48 m-auto'>{data[key]?.inputData?.name}</h3>
              <h3 className='text-gray-700 overflow-ellipsis overflow-hidden m-auto font-semibold'>{data[key]?.inputData?.price}</h3>
              <button
                className='bg-black text-white text-sm px-3 border-2 hover:bg-white hover:text-black border-black p-2 my-2 rounded-full font-normal'
              >
                Buy Now
              </button>
            </Link>
          );
        })}
    </>
  );
};

export default ServerData;
