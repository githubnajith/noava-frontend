// components
import Hero from './components/1.Hero/Hero';
import MobileImagePreview from './components/2.Custom-skin-preview/1.Mobile_img_preview';
import CustomSkinDescription from './components/2.Custom-skin-preview/2.CustomSkinDescription';
import ProductScroll from './components/3.Product-scroll/ProductScroll';
import Rating_card from './components/4.Rating-card/Rating_card';
import Testimonial_slider from './components/5.Testimonial-slider/Testimonial_slider';
import About from './components/6.About/About';
import Instagram_gallery from './components/7.Instagram-gallery/Instagram_gallery';
import OurFeatures from './components/8.our-features/OurFeatures';
import Category_card_ui from '@/common-components/Category_card_ui';
// fetch
import {fetchData} from '@/util/1.fetch_data';
// ------------------------------------------
export default async function Home() {
  const home_baseUrl = 'noava/home';
  const homePage_data = await fetchData(home_baseUrl);
  // -----------------------------------------------------------------------------
  const custom_skin_scroll = homePage_data?.productScroll?.customSkinScroll;
  const skin_scroll_data = homePage_data?.productScroll?.Skin_product_scroll;
  const accessories_scroll_data = homePage_data?.productScroll?.Accessories_scroll;
  const product_scroll_1 = homePage_data?.productScroll?.product_scroll_1;
  const product_scroll_2 = homePage_data?.productScroll?.product_scroll_2;
  // ?------------------------------------------------------------------------------------------------------------------
  // skins
  const skin_data = await fetchData('noava/products/skins/maincategory/title');
  // ?------------------------------------------------------------------------------------------------------------------

  return (
    <div className='space-y-6'>
      <Hero />
      {/* ------------------------------------------- */}
      {/* skin maincategories ------------------------*/}
      <section>
        <h3 className='text-xl md:text-3xl text-center font-bold pb-4'>Select Your Device</h3>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-4 px-4 py-2'>
        {skin_data &&
          Object.keys(skin_data).map((key) => {
            return (
              <Category_card_ui
                key={key}
                src={skin_data[key]?.image?.imageUrl}
                alt={skin_data[key]?.image?.imageName}
                heading={skin_data[key]?.inputData?.name}
                link={`skin-subcategory/${key}`}
              />
            );
          })}
      </div>
    </section>
      {/* ------------------------------------------- */}
      {/* custom skinpreview */}
      <div className='grid lg:grid-flow-col lg:grid-cols-2'>
        <MobileImagePreview />
        <CustomSkinDescription />
      </div>
      {/* ------------------------------------------- */}

      {/* custom skin product scroll */}
      {custom_skin_scroll && (
        <ProductScroll
          title='Noava Collections'
          data={custom_skin_scroll}
        />
      )}
      {/* ------------------------------------------- */}
      {/* Accessories product scroll */}
      {accessories_scroll_data && (
        <ProductScroll
          title='Accessories'
          data={accessories_scroll_data}
        />
      )}
      {/* ------------------------------------------- */}
      {/* product scroll 1 */}
      {product_scroll_1 && (
        <ProductScroll
          title='Trending Designs'
          data={product_scroll_1}
        />
      )}
      {/* ------------------------------------------- */}

      {/* ------------------------------------------- */}
      {/* About */}
      <Instagram_gallery />
      {/* ------------------------------------------- */}
      {/* About */}
      <About />
      {/* ------------------------------------------- */}
      {/* Our features */}
      <OurFeatures />
      {/* ------------------------------------------- */}
    </div>
  );
}
