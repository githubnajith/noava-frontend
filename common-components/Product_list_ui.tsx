import Link from "next/link";
// -------------------------------------------

export default function Product_list_ui(props: any) {
  return (
    <Link href={props?.to} className="w-[200x] rounded-lg cursor-pointer relative border py-4 hover:shadow-lg hover:border-black shadow-[#9c9276]">
      <div className="mt-0 mr-[-1] mb-[-1] ml-0 space-y-2 flex flex-col items-center py-2 ">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-[200px] h-[200px] object-contain" src={props?.src} loading="lazy" alt={props?.alt} />
        <h2 className="md:text-md text-center  text-black truncate w-40">{props?.title}</h2>
        <h2 className="text-md text-center font-semibold text-black truncate w-40">&#8377; {props?.price}</h2>
      </div>
    </Link>
  );
}
