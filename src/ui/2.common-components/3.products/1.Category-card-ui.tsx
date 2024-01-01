/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
// ------------------------------------------------------------
interface Props {
  link: string;
  src: string;
  alt: string;
  heading: string;
}
// ------------------------------------------------------------

const Category_card_ui = (props: Props) => {
  // ------------------------------
  const { link, src, alt, heading } = props;
  // ------------------------------

  return (
    <Link href={link}>
      <div className="flex flex-col  hover:scale-105 shadow-xl rounded-xl">
        <img src={src} alt={alt} className="rounded-t-md" loading="lazy" />
        <div className="flex items-center text-center justify-center">
          <div className="bg-black text-white py-1 md:py-2  lg:py-3 inline-block px-4 rounded-b-md w-full">
            <h3 className="text-sm md:text-md lg:text-xl font-bold"> {heading}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category_card_ui;
