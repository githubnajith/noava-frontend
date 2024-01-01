// fetch
import { fetchData } from "@/utils/1.fetch_data";
// components
import Hero from "@/ui/1.components/1.home/1.hero/Hero";
import Category_list_ui from "@/ui/2.common-components/3.products/2.Category-list-ui";
import Custom_skin_preview from "@/ui/1.components/1.home/2.custom-skin-preview/Custom-skin-preview";
import Product_scroll__ui from "@/ui/1.components/1.home/3.product-scroll/Product-scroll";
import Instagram_gallery from "@/ui/1.components/1.home/4.instagram-gallery/Instagram_gallery";
import About from "@/ui/1.components/1.home/5.about/About";
import Our_features from "@/ui/1.components/1.home/6.our-features/Our-features";
// ?------------------------------------------------------------------------------------------------------------------
const Home = async () => {
  // -------------------------------------------------------------------------------------
  const home_baseUrl = "noava/home";
  const homePage_data = await fetchData(home_baseUrl);
  const skin_data = await fetchData("noava/products/skins/maincategory/title");
  // -------------------------------------------------------------------------------------
  const custom_skin_scroll = homePage_data?.productScroll?.customSkinScroll;
  const accessories_scroll_data = homePage_data?.productScroll?.Accessories_scroll;
  const product_scroll_1 = homePage_data?.productScroll?.product_scroll_1;
  // ?------------------------------------------------------------------------------------------------------------------
  return (
    <div className="space-y-6">
      {/* ------------------------------------------- */}
      {/* 1.hero */}
      <main>
        <Hero />
      </main>
      {/* ------------------------------------------- */}
      {/* 2.skin maincategories */}
      <section>
        <h3 className="text-xl md:text-3xl text-center font-bold pb-4">Select Your Device</h3>
        <Category_list_ui data={skin_data} link={`skin-subcategory`} />
      </section>
      {/* ------------------------------------------- */}
      {/* custom skinpreview */}
      <Custom_skin_preview />
      {/* ------------------------------------------- */}
      {/* custom skin product scroll */}
      {custom_skin_scroll && <Product_scroll__ui title="Noava Collections" data={custom_skin_scroll} />}
      {/* ------------------------------------------- */}
      {/* Accessories product scroll */}
      {accessories_scroll_data && <Product_scroll__ui title="Accessories" data={accessories_scroll_data} />}
      {/* ------------------------------------------- */}
      {/* product scroll 1 */}
      {product_scroll_1 && <Product_scroll__ui title="Trending Designs" data={product_scroll_1} />}
      {/* ------------------------------------------- */}
      {/* Instagram gallery */}
      <Instagram_gallery />
      {/* ------------------------------------------- */}
      {/* About */}
      <About />
      {/* ------------------------------------------- */}
      {/* Our features */}
      <Our_features />
      {/* ------------------------------------------- */}
    </div>
  );
};
export default Home;
