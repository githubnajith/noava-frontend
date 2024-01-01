/* eslint-disable @next/next/no-img-element */

const Our_features = () => {
  return (
    <section className="grid md:grid-flow-col md:grid-cols-3 px-6 shadow-md py-3">
      <div className="text-center text-gray-700 space-y-4 p-4 shadow rounded-xl">
        <img className="h-20 m-auto" loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fassets%2FproductCart.webp?alt=media&token=3b520a70-80bd-4344-8ba2-bf46d49544c3" alt="product cart" width={80} height={20} />
        <h3 className="text-xl font-semibold">Same Day Dispatch</h3>
        <p className="">All orders placed 8pm Monday to Friday are dispatched same day.</p>
      </div>
      <div className="text-center text-gray-700 space-y-4 p-4 shadow rounded-xl">
        <img className="h-20 m-auto" loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fassets%2Fdelivery-truck.webp?alt=media&token=265124d6-6b4c-407b-b354-8ee7b3d24e92" alt="delivery truck" width={80} height={20} />
        <h3 className="text-xl font-semibold">Fast Delivery</h3>
        <p className="">Orders to metro cities reach in 2-4 working days.</p>
      </div>
      <div className="text-center text-gray-700 space-y-4 p-4 shadow rounded-xl">
        <img className="h-20 m-auto" loading="lazy" src="https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fhome%2Fassets%2Fclock.webp?alt=media&token=d1bdec18-bdb3-486a-9bda-9e0e2462cd95" alt="clock" width={80} height={20} />
        <h3 className="text-xl font-semibold">Cancellation Policy</h3>
        <p className="">Easy cancellation from the dashboard within 2 hours of placing the order.</p>
      </div>
    </section>
  );
};
export default Our_features;
