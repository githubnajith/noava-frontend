import Image from "next/image";

export default function OurFeatures() {
  return (
    <section className='grid md:grid-flow-col md:grid-cols-3 px-6 shadow-md py-3'>
      <div className='text-center text-gray-700 space-y-4 p-4 shadow rounded-xl'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          className='h-20 m-auto'
          src='/1.Home/OurFeatures/productCart.png'
          alt='product cart'
          width={80}
          height={20}
        />
        <h3 className='text-xl font-semibold'>Same Day Dispatch</h3>
        <p className=''>All orders placed 8pm Monday to Friday are dispatched same day.</p>
      </div>
      <div className='text-center text-gray-700 space-y-4 p-4 shadow rounded-xl'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          className='h-20 m-auto'
          src='/1.Home/OurFeatures/delivery-truck.png'
          alt='delivery truck'
          width={80}
          height={20}
        />
        <h3 className='text-xl font-semibold'>Fast Delivery</h3>
        <p className=''>Orders to metro cities reach in 2-4 working days.</p>
      </div>
      <div className='text-center text-gray-700 space-y-4 p-4 shadow rounded-xl'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Image
          className='h-20 m-auto'
          src='/1.Home/OurFeatures/clock.png'
          alt='clock'
          width={80}
          height={20}
        />
        <h3 className='text-xl font-semibold'>Cancellation Policy</h3>
        <p className=''>Easy cancellation from the dashboard within 2 hours of placing the order.</p>
      </div>
    </section>
  );
}
