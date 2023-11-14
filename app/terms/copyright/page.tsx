const Copyright_disclaimer = () => {
  const data = [
    'All content, including text, graphics, logos, images, and designs on noava.in, is protected by copyright laws. The content is the property of noava.in and may not be reproduced, distributed, or used without our express written permission.',
    'Disclaimer',
    'By using noava.in, you agree to the following disclaimer:',
    'Accuracy of Information: While we strive to provide accurate and up-to-date information, we make no warranties or representations about the completeness, accuracy, reliability, suitability, or availability of the content on this website. Any reliance you place on such information is strictly at your own risk.',
    'Product Images: Product images on noava.in are for illustration purposes only. Actual products may vary in appearance.',
    'Third-Party Links: noava.in may contain links to third-party websites. These links are provided for your convenience and do not signify our endorsement of the website(s) or their content. We have no control over the content, availability, or practices of these external websites and disclaim any responsibility for them.',
    'Limitation of Liability: We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website.',
    'Changes to the Website: We may update, modify, or discontinue any aspect of noava.in at any time without notice.',
    'Contact Us',
    'If you have any questions or concerns about our copyright notice or disclaimer, please contact us at support@noava.in, and we will be happy to assist you.',
  ];
  return (
    <main className='px-2'>
      <h1 className='font-semibold py-2'> Copyright Notice & Disclaimer for noava.in</h1>
      <h2 className='text-sm'>Copyright Notice</h2>
      {/* ---------- */}
      {/* terms and conditions */}
      <div className='py-2 space-y-2'>
        {data &&
          data.map((data) => {
            return (
              <ul
                key={data}
                className='py-1'
              >
                {data}
              </ul>
            );
          })}
      </div>
    </main>
  );
};

export default Copyright_disclaimer;
