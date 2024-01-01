import Mobile_img_preview from "./1.Mobile-img-preview";
import Custom_skin_description from "./2.Custom-skin-description";
// --------------------------------------------------------------
const Custom_skin_preview = () => {
  return (
    <div className="grid lg:grid-flow-col lg:grid-cols-2">
      <Mobile_img_preview />
      <Custom_skin_description />
    </div>
  );
};
export default Custom_skin_preview;
