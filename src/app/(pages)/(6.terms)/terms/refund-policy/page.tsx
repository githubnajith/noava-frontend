const Refund_policy = () => {
  const data = [
    {
      title: '1.Refund Eligibility',
      points: [
        'We strive to provide you with high-quality custom mobile skins. If you are not completely satisfied with your purchase, you may be eligible for a refund under the following conditions:',
        'You contact our customer support team at support@noava.in within 7 days of receiving your order.The mobile skin is unused, in its original condition, and in its original packaging.',
      ],
    },
    {
      title: '2. How to Initiate a Refund',
      points: [
        'To initiate a refund, please follow these steps:',
        'Contact our customer support team at support@noava.in and provide them with your order details.Our team will guide you through the refund process and provide you with instructions on returning the item.',
      ],
    },
    {
      title: '3. Refund Process',
      points: [
        'Once we receive and inspect your returned item, we will process your refund. The refund will be issued to the original payment method used for the purchase. Please allow 7 days for the refund to be processed.',
      ],
    },
    {
      title: '4. Non-Refundable Items',
      points: [
        'Please note that certain items are non-refundable:',
        'Custom mobile skins with personalization that was approved during the ordering process.Items that are not in their original condition or that show signs of use.',
      ],
    },
    {
      title: '5. Shipping Costs',
      points: ['Shipping costs are non-refundable unless the return is due to our error or a defective product.'],
    },
    {
      title: '6. Contact Us',
      points: [
        'If you have any questions or concerns about our refund policy, please contact our customer support team at support@noava.in, and we will be happy to assist you.',
      ],
    },
  ];
  return (
    <main className='px-2'>
      <h1 className='font-semibold py-2'>Refund and cancellation Policy for noava.in</h1>
      <h2 className='text-sm'>
        At noava.in, we are committed to ensuring that our customers are satisfied with their skins. Please review the following information regarding
        our refund policy:
      </h2>
      {/* ---------- */}
      {/* terms and conditions */}
      <div className='py-2'>
        {data?.map((data) => {
          return (
            <section key={data?.title}>
              {/* title */}
              <h3 className='font-semibold py-2'>{data?.title}</h3>
              {/* points */}
              {data?.points.map((points) => {
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

export default Refund_policy;
