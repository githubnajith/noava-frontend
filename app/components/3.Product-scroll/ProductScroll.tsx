import ProductScroll_ui from './1.ProductScroll_ui';
import ServerData from './2.ServerData';
// ----------------------------------------------------------
interface Props {
  title: string;
  data: any;
}
// const ProductScroll = (props: any) => {
const ProductScroll = (props: Props) => {
  return (
    <>
      <ProductScroll_ui title={props.title}>
        <ServerData data={props.data} />
      </ProductScroll_ui>
    </>
  );
};

export default ProductScroll;
