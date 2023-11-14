import {fetchData} from '@/util/1.fetch_data';
import Category_card_ui from '@/common-components/Category_card_ui';
// ------------------------------------
export default async function page() {
  const baseUrl = `noava/products/skins/maincategory/title`;
  const data = await fetchData(baseUrl);

  return (
    <main>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-4 px-4 py-2'>
        {data &&
          Object.keys(data).map((key) => {
            return (
              <Category_card_ui
                key={key}
                src={data[key]?.image?.imageUrl}
                alt={data[key]?.image?.imageName}
                heading={data[key]?.inputData?.name}
                link={`skin-subcategory/${key}`}
              />
            );
          })}
      </div>
    </main>
  );
}
