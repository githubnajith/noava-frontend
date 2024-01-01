const Shipping_policy = () => {
  const data = [
    {
      title: 'Last updated on Sep 27th 2023',
      points: [
        `For International buyers, orders are shipped and delivered through registered international courier companies and/or International speed post only. For domestic buyers, orders are shipped through registered domestic courier companies and /or speed post only. Orders are shipped within 3-5 days or as per the delivery date agreed at the time of order confirmation and delivering of the shipment subject to Courier Company / post office norms. Noava is not liable for any delay in delivery by the courier company / postal authorities and only guarantees to hand over the consignment to the courier company or postal authorities within 3-5 days from the date of the order and payment or as per the delivery date agreed at the time of order confirmation. Delivery of all orders will be to the address provided by the buyer. Delivery of our services will be confirmed on your mail ID as specified during registration. For any issues in utilizing our services you may contact our helpdesk on 9363137070 or support@noava.in`,
      ],
    },
  ];
  return (
    <main className='px-2'>
      <h1 className='font-semibold py-2'>Shipping & Delivery Policy</h1>
      {/* ---------- */}
      {/* terms and conditions */}
      <div className='py-2'>
        {data?.map((data) => {
          return (
            <section key={data?.title}>
              {/* title */}
              <h3 className='font-semibold py-2'>{data?.title}</h3>
              {/* points */}
              {data?.points &&
                data?.points.map((points) => {
                  return (
                    <ul
                      key={points}
                      className='py-1'
                    >
                      {points}
                    </ul>
                  );
                })}
            </section>
          );
        })}
      </div>
    </main>
  );
};

export default Shipping_policy;
