const Terms_and_conditions = () => {
  const data = [
    {
      title: '1. Acceptance of Terms',
      points: [
        'Welcome to noava.in ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of noava.in and any related services offered on our website. By accessing or using our website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our services.',
      ],
    },
    {
      title: '2. Use of Our Services',
      points: [
        '2.1. Eligibility: You must be at least 18 years old to use our services. By using our services, you represent that you are of legal age to form a binding contract.',
        '2.2. User Account: If you create an account on our website, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.',
        '2.3. Prohibited Activities: You agree not to engage in any activities on our website that violate applicable laws or regulations, infringe on the rights of others, or are harmful to us or third parties.',
      ],
    },
    {
      title: '3. Ordering and Payment',
      points: [
        '3.1. Orders: When you place an order through our website, you agree to provide accurate and complete information. We reserve the right to cancel or refuse any orders at our discretion.',
        '3.2. Payment: Payment for orders is processed securely through our designated payment processors. You agree to pay all charges associated with your orders, including applicable taxes.',
      ],
    },
    {
      title: '4. Intellectual Property',
      points: [
        '4.1. Content Ownership: We retain ownership of all content on our website, including text, graphics, logos, and images. You may not use our content without our written permission.',
        '4.2. User-generated Content: By submitting content to our website, you grant us a non-exclusive, royalty-free, worldwide license to use, reproduce, and display that content.',
      ],
    },
    {
      title: '5. Privacy',
      points: ['Your use of our services is also governed by our Privacy Policy,'],
    },
    {
      title: '6. Termination',
      points: [
        'We reserve the right to terminate or suspend your access to our services at our discretion, without notice, for any violation of these Terms.',
      ],
    },
    {
      title: '7. Disclaimer of Warranties',
      points: [
        'Our services are provided "as is" and "as available" without any warranties of any kind. We do not guarantee the accuracy, reliability, or availability of our services.',
      ],
    },
    {
      title: '8. Limitation of Liability',
      points: [
        'We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services.',
      ],
    },
    {
      title: '9. Changes to These Terms',
      points: [
        'We may update these Terms from time to time, and any changes will be effective upon posting on our website. It is your responsibility to review these Terms regularly.',
      ],
    },
    {
      title: '10. Contact Us',
      points: ['If you have any questions or concerns about these Terms, please contact us at support@noava.in.'],
    },
  ];
  return (
    <main className='px-2'>
      <h1 className='font-semibold py-2'>Terms and conditions for NOAVA</h1>
      <h2 className='text-sm'>Effective Date: [25-9-2023]</h2>
      {/* ---------- */}
      {/* terms and conditions */}
      <div className='py-2'>
        {data &&
          data?.map((data) => {
            return (
              <section key={data?.title}>
                {/* title */}
                <h3 className='font-semibold py-2'>{data?.title}</h3>
                {/* points */}
                {data?.points?.map((points) => {
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

export default Terms_and_conditions;
