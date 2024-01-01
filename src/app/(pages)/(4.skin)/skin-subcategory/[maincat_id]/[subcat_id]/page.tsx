import { fetchData } from '@/utils/1.fetch_data';
import { reverse_fetched_data } from '@/utils/2.reverse_fetched_data';
import Product_list_ui from '@/ui/2.common-components/3.products/3.Product_list_ui';
// -----------------------------------------------------------------------
interface Params {
  params: {
    maincat_id: 'string';
    subcat_id: 'string';
  };
}
const Skins_product_list = async ({params}: Params) => {
  const navigate = `/skin_Product_detail/${params.maincat_id}/${params.subcat_id}`;

  // -----------------
  const baseUrl = `noava/products/skins/products/${params.maincat_id}/${params.subcat_id}`;
  const data = await fetchData(baseUrl);

  const reverseData = await reverse_fetched_data(data);
  // -------------------------------------------------------------------------------------
  return (
    <>
      {reverseData && (
        <main className='grid grid-cols-2 md:grid-cols-5 gap-2 w-full py-2 px-4'>
          {reverseData?.map((data) => {
            return (
              <Product_list_ui
                key={data?.id}
                to={`${navigate}/${data?.id}`}
                src={data?.image?.imageUrl}
                alt={data?.image?.imageName}
                title={data?.inputData?.name}
                price={data?.inputData?.price}
              />
            );
          })}
        </main>
      )}
    </>
  );
};
export default Skins_product_list;
