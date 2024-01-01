import React from 'react';
// components
import SocialLinks from './1.SocialLink';
import ContactInfo from './3.ContactInfo';
import Links from './2.Links';
import Terms from './4.Term';

const Footer = () => {
  return (
    <footer className='bg-black w-full px-6 space-y-5 md:px-14 lg:px-28 py-8'>
      {/* 1.social links */}
      <SocialLinks />
      {/* 2.links */}
      <Links />
      {/* 3.contact info */}
      <ContactInfo />
      {/* 4.terms */}
      <Terms />
      {/* copy rights */}
      <h3 className='text-white py-2 text-center'>&#169; 2023 NOAVA. All Rights Reserved. </h3>
    </footer>
  );
};

export default Footer;
