const Privacy_policy = () => {
  const data = [
    {
      title: '1. Introduction',
      points: [
        'Welcome to noava.in ("we," "our," or "us"). At noava.in, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your personal data when you visit our website or use our services.',
      ],
    },
    {
      title: '2. Information We Collect',
      points: [
        '2.1. Personal Information: We may collect personal information, such as your name, email address, shipping address, and payment information when you make a purchase or create an account with us.',
        '2.2. Usage Information: We may collect non-personal information about how you use our website, including your device information, browser type, IP address, and cookies.',
      ],
    },
    {
      title: '3. How We Use Your Information',
      points: [
        '3.1. To Provide Services: We use your personal information to fulfill your orders, process payments, and provide customer support.',
        '3.2. Marketing: With your consent, we may use your email address to send you promotional offers and updates about our products and services. You can opt-out of these communications at any time.',
        '3.3. Analytics: We may use your non-personal information for website analytics and improvement.',
      ],
    },
    {
      title: '4. How We Share Your Information',
      points: [
        '4.1. Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services.',
        '4.2. Legal Requirements: We may disclose your information when required by law, regulation, or in response to a valid legal request.',
      ],
    },
    {
      title: '5. Your Choices',
      points: [
        '5.1. Access and Correction: You can access and update your personal information by logging into your account or contacting us.',
        '5.2. Opt-Out: You can opt-out of marketing communications by following the instructions provided in our emails.',
      ],
    },
    {
      title: '6. Security',
      points: ['We take reasonable measures to protect your personal information from unauthorized access or disclosure.'],
    },
    {
      title: '7. Cookies',
      points: [
        'We use cookies and similar tracking technologies to improve your browsing experience. You can manage your cookie preferences through your browser settings.',
      ],
    },
    {
      title: `8. Children's Privacy`,
      points: ['Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.'],
    },
    {
      title: `9. Changes to this Privacy Policy`,
      points: [
        'We may update this Privacy Policy to reflect changes in our practices. The updated policy will be posted on this page with the revised effective date.',
      ],
    },
    {
      title: `10. Contact Us`,
      points: ['If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at support@noava.in.'],
    },
  ];
  return (
    <main className='px-2'>
      <h1 className='font-semibold py-2'>Privacy Policy for NOAVA</h1>
      <h2 className='text-sm'>Effective Date: [25-9-2023]</h2>
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

export default Privacy_policy;
