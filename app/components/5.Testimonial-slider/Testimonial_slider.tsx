import TestimonialSliderUi from './1.Testimonial_slider_ui';
import Review from './2.Review';
// ---------------------------------------------------------------
export default function Testimonial_slider() {
  return (
    <section className='shadow-xl py-3 space-y-3'>
      <div className='text-center'>
        <h3 className='py-4 text-2xl font-semibold text-gray-600'>What Our Client Says &#128525;</h3>
        <h4 className='text-md text-gray-500'>
          Our Clients send us bunch of smilies with our services and we love them &#128522; &#128516; &#128512;
        </h4>
      </div>
      <TestimonialSliderUi>{<Review />}</TestimonialSliderUi>
      <div className='text-center py-3'>
        <a
          href='https://www.google.co.in/search?q=noava+mobile+skins+%26+wraps+coimbatore+reviews&ie=UTF-8&oe=UTF-8&hl=en-in&client=safari&si=ACFMAn-JlfkjHh0ezdNAbIMBZMsz2pZUCvXAg_gwiJ8w9ZZwYsOQjMfQr7TwYr9M8uh75wGrAboyvpriM7m0gYhGTtpKi7jS1dRX0v8zxv7CMKWYspmh3Rv1tWLZHqrwKLXQhGgUCMTzTyCCIE93i0lC2XSudc5t8Hk7eAgVtrm3TF3D1UheDzRJnvYofsTKizGMtff2-4G7&ictx=1&ved=2ahUKEwjx_Na0nvqAAxUacGwGHRayBiAQyNoBKAJ6BAgVEAk '
          target='_blank'
          className='py-3 px-4 border-2 text-md border-orange-600 text-orange-600 font-medium	rounded-md shadow-lg hover:text-white hover:bg-orange-600'
        >
          Read Our reviews
        </a>
      </div>
    </section>
  );
}
