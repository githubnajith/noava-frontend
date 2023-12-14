import {fetchData} from '@/util/1.fetch_data';
import Category_card_ui from '@/common-components/Category_card_ui';
// ----------------------------------------------
interface Params {
  params: {
    maincat_id: string;
  };
}
export default async function SkinSubcategory({params}: Params) {
  // 1.fetch customskin data
  const custonSkin_baseUrl = `noava/products/skins/subcategory/${params?.maincat_id}/customSkin`;
  const customSkin_data = await fetchData(custonSkin_baseUrl);
  // ------------------------------
  // 2.fetch subcategory data
  const subcategory_baseUrl = `noava/products/skins/subcategory/${params?.maincat_id}/title`;
  const subcat_data = await fetchData(subcategory_baseUrl);  
  // ------------------------------
  return (
    <main className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 px-4 py-2'>
      {/* custom skin */}
      {customSkin_data?.inputData && (
        <Category_card_ui
          alt={customSkin_data?.image?.imageName}
          heading={customSkin_data?.inputData?.name}
          link={`/customSkinProductDetail/${params?.maincat_id}`}
          src={customSkin_data?.image?.imageUrl}
        />
      )} 
      {/* --------------------- */}
      {subcat_data &&
        Object.keys(subcat_data).map((key) => {
          return (
            <Category_card_ui
            key={key}
              src={subcat_data[key].image.imageUrl}
              alt={subcat_data[key].image.imageName}
              link={`/skin-subcategory/${params?.maincat_id}/${key}`}
              heading={subcat_data[key]?.inputData?.name}
            />
          );
        })}
      {/* --------------------- */}
    </main>
  );
}

// --------------
// export const generateStaticParams = async () => {
//   const baseUrl = `noava/products/skins/maincategory/title`;
//   const data = await fetchData(baseUrl);
//   return Object.keys(data).map((key) => {
//     {
//       maincat_id: key.toString();
//     }
//   });
// };
