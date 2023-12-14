import Link from "next/link";
import Category_card_ui from "@/common-components/Category_card_ui";
// --------------------------------------------
interface Props {
  title: string;
  link: string;
  src: string;
  alt: string;
}
const Subcategory_card_ui = (props: Props) => {
  return (
    <Link href={props?.link}>
      <section className="flex flex-col justify-between cursor-pointer relative border  hover:shadow-lg hover:border-black shadow-[#9c9276] rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-[400px] h-auto rounded-lg" src={props.src} alt={props.alt} loading="lazy" />
        <div className="flex items-center text-center justify-center">
          <div className="bg-black text-white inline-block py-1 px-4 rounded-b-md w-full">
            <h3 className="">{props.title}</h3>
          </div>
        </div>
      </section>
    </Link>
  );
};

export default Subcategory_card_ui;
