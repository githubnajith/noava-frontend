// icons
import {IoLogoInstagram} from 'react-icons/io5';
// -------------------------------------------------
export default function Instagram_gallery() {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1701325330531%2FSKIN-MOCKUP-FIX(1701325330531)?alt=media&token=a8223cd6-4aee-438f-8add-c80ac6238c3c',
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1701325174703%2FSKIN-MOCKUP-FIX(1701325174703)?alt=media&token=d93e54a4-9a0c-41d8-844c-9a0a5dfa8986',
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1701325023153%2FSKIN-MOCKUP-FIX(1701325023153)?alt=media&token=fe26989b-ce41-4c87-a3b6-dbcd5458618b',
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1701324666355%2FSKIN-MOCKUP-FIX(1701324666355)?alt=media&token=73f861f7-d1f0-4164-a8cd-babbb8cd928b',
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1701084753472%2FSKIN-MOCKUP-FIX(1701084753472)?alt=media&token=c709c74b-2f9e-4633-a3b1-14b0017f4c5a',
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1697867211071%2FSKIN-MOCKUP-FIX(1697867211071)?alt=media&token=5c90a0ef-ed9f-4451-93e4-ca02fbe3a4d0',
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1699075776627%2FSKIN-MOCKUP-FIX(1699075776627)?alt=media&token=69511770-4952-4bc0-8aa8-60ca58a2960c',
    'https://firebasestorage.googleapis.com/v0/b/noava-25035.appspot.com/o/noava%2Fproducts%2Fskins%2F1694010110185%2F1694010138529%2F1697458483850%2FSKIN-MOCKUP-FIX(1697458483850)?alt=media&token=2181eb25-13da-4702-8eea-4b91cc1305d2',
  ];
  // -----------------------------------------
  return (
    <>
      <section className='py-4 flex flex-col items-center justify-center shadow-lg'>
        <div className='flex items-center justify-center space-x-2 w-full'>
        <div className='w-full flex-nowrap  flex justify-center items-center'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className='h-14'
            src={
              '/1.Home/instagramLogo.png'
            }
            alt='mobile skin'
            loading='lazy'
          />
          <div className='flex flex-col flex-nowrap'>
          <h3 className='text-xl font-bold text-black'>#NOAVA ON INSTA</h3>
          <span className='block text-sm'>FOLLOW US FOR MORE UPDATES</span>
          </div>
          </div>

        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 px-2 py-2'>
          {images?.map((data) => {
            return (
              <div key={data}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className='lg:h-[300px] lg:w-[300px] max-w-full rounded-lg object-cover'
                  src={data}
                  alt='noava skins'
                />
              </div>
            );
          })}
        </div>
        {/* -------------- */}
        <a
          href='https://www.instagram.com/stories/highlights/17943728276221969/'
          target='_blank'
          className='flex justify-center items-center shadow-md p-2 border-2 bg-black text-white rounded-full border-black hover:bg-white hover:text-black'
        >
          Follow us
        </a>
      </section>
    </>
  );
}
