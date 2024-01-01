import { fetchData } from "@/utils/1.fetch_data";
import Category_list_ui from "@/ui/2.common-components/3.products/2.Category-list-ui";
// ------------------------------------------------------------
export default async function page() {
  // ------------------------------
  const baseUrl = `noava/products/skins/maincategory/title`;
  const data = await fetchData(baseUrl);
  // ------------------------------------------------------------

  return (
    <main>
      <Category_list_ui data={data} link={`skin-subcategory`} />
    </main>
  );
}
