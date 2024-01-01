import Link from 'next/link';
// --------------------------------------------------------------------
interface Props {
  link?: string;
  src: string;
  alt: string;
  heading: string;
  description?: string;
}
const Card_ui = (props: Props) => {
  return (
    <Link href={props?.link ? props?.link : ''}>
      <div className='shadow grid lg:grid-flow-col lg:grid-cols-2 bg-white'>
        {/* 1.image */}
        <img
          className='object-contain h-[50vh] w-full lg:h-[70vh]'
          src={props.src}
          loading='lazy'
          alt={props.alt}
        />
        {/* 2.heading */}
        <div className=' bg-white m-auto w-full lg:px-[10%] '>
          <div className='flex items-center justify-center flex-col lg:items-start pb-4 space-y-4 lg:space-y-6'>
            <h2 className='text-4xl font-bold lg:text-7xl text-black'>{props.heading}</h2>
            {/* description */}
            <p className='text-sm lg:my-6 lg:text-2xl text-gray-700'>{props.description}</p>

            {props?.link && (
              <button
                className='px-8 py-2 bg-black text-white font-semibold lg:text-lg  border-black
      hover:bg-white hover:text-black border-2 rounded-full'
              >
                view
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card_ui;
// ---------------------
