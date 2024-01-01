import Category_card_ui from "./1.Category-card-ui";
// ------------------------------------------------------------
interface Props {
  data: any; //? improve with ts
  link: string;
}
// ------------------------------------------------------------

const Category_list_ui = (props: Props) => {
  // ------------------------------
  const { data, link } = props;
  // ------------------------------
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 px-4 py-2">
      {Object.keys(data)?.map((key) => {
        return <Category_card_ui key={key} src={data[key].image.imageUrl} alt={data[key].image.imageName} link={`${link}/${key}`} heading={data[key]?.inputData?.name} />;
      })}
    </div>
  );
};

export default Category_list_ui;
