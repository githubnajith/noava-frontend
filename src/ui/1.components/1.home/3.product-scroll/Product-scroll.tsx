import Product_scroll_ui from "./1.Product-scroll_ui";
import Server_data from "./2.Server-data";
// ----------------------------------------------------------
interface Props {
  title: string;
  data: any;
}
const Product_scroll__ui = (props: Props) => {
  return (
    <>
      <Product_scroll_ui title={props.title}>
        <Server_data data={props.data} />
      </Product_scroll_ui>
    </>
  );
};

export default Product_scroll__ui;
