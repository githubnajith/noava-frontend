import {IoLogoInstagram, IoLogoYoutube, IoLogoFacebook, IoLogoGoogle} from 'react-icons/io5';

const SocialLinks = () => {
  // css
  const iconStyle = `text-white text-[2rem]`;

  // data
  const icon = [
    {icon: IoLogoInstagram, link: 'https://www.instagram.com/noava.in/?hl=en'},
    {icon: IoLogoYoutube, link: 'https://www.youtube.com/@noavawrap3883'},
    {icon: IoLogoFacebook, link: 'https://www.facebook.com/noava.wrap?mibextid=LQQJ4d'},
    {
      icon: IoLogoGoogle,
      link: 'https://www.google.com/search?sca_esv=561228216&sxsrf=AB5stBhjDLHqTZbjxXXVYTNfMczrfSrKPw:1693376030998&q=Noava+Mobile+Skins+%26+Wraps&ludocid=14248038776102976937&lsig=AB86z5VkICyBXDVqhhcGzbmifErR&kgs=64f8d4cb51363d74&shndl=-1&shem=lbse,lsp&source=sh/x/kp/local/m1/3',
    },
  ];

  return (
    <section className='flex flex-wrap items-center justify-center space-x-5 pb-6 md:items-center space-y-4 flex-col pt-4'>
      <h2 className="text-white text-lg lg:after:content-[':']">Our Social Links</h2>
      <div>
        <div className='flex gap-5'>
          {icon.map((Data, index) => {
            return (
              <a
                key={index}
                href={Data.link}
                target='_blank'
              >
                <Data.icon className='text-white text-3xl' />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default SocialLinks;
