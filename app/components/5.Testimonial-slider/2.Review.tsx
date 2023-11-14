// icons
import {IoStar} from 'react-icons/io5';
// images
import user1 from '@/public/1.Home/reviewImages/mobile_skins.png';
import user3 from '@/public/1.Home/reviewImages/airpodSkins.png';
import user4 from '@/public/1.Home/reviewImages/ipadskins.png';
import user5 from '@/public/1.Home/reviewImages/airpodCustomSkin.png';
import user6 from '@/public/1.Home/reviewImages/animeSkins.png';
import {StaticImageData} from 'next/image';
import Image from 'next/image';
// ---------------------------------------------
interface userData {
  image: StaticImageData;
  name: string;
  review: string;
}
export default function Review() {
  const data: userData[] = [
    {
      image: user1,
      name: 'Akvikram',
      review: `Good skin options Prices starts from150...i did a white skin for 150 rs for my LG phone ..  neatly done job  Small shops in tightly cramped street finding parking is the problem. Customize options available... Recommended`,
    },
    {
      image: user1,
      name: 'Aarthi Annadurai',
      review: `Unexpected..I'm so happy customer ....thnk u so much for wonderful moment definitely i share all friends`,
    },
    {
      image: user3,
      name: 'Aarthi',
      review: `Unexpected...I'm so happy customer ....tnk u so much for wonderful moment definitely I share the all friends`,
    },
    {
      image: user4,
      name: 'HARIHARAN R R 201IT113',
      review: `Wow 🤩🤩🤩 super low prices and complete satisfaction ✨✨✨`,
    },
    {
      image: user5,
      name: 'Percy Kishor',
      review: `Best skin shop ...clean n quality work by noava .... 💯% recommended ... Customer friendly price ....`,
    },
    {
      image: user6,
      name: 'Louies Joshuaa',
      review: `It is really amazing😍🤩`,
    },
  ];
  return (
    <>
      {data &&
        data.map((data) => {
          return (
            <li
              key={data.name}
              className='inline-block snap-center snap-always border-2 border-black rounded-xl h-50'
            >
              <div className='whitespace-normal flex flex-col justify-center items-center mx-auto py-4 my-4 gap-2 px-4 rounded-xl'>
                <Image
                  src={data.image}
                  alt='user image'
                />
                <h3 className='font-bold text-gray-600'>{data.name}</h3>
                {/* rating */}
                <div className='flex gap-1'>
                  <h3 className='text-yellow-500 text-lg'>
                    <IoStar />
                  </h3>
                  <h3 className='text-yellow-500 text-lg'>
                    <IoStar />
                  </h3>
                  <h3 className='text-yellow-500 text-lg'>
                    <IoStar />
                  </h3>
                  <h3 className='text-yellow-500 text-lg'>
                    <IoStar />
                  </h3>
                  <h3 className='text-yellow-500 text-lg'>
                    <IoStar />
                  </h3>
                </div>

                {/* review */}
                <p className='text-gray-500 text-md font-normal '>{data.review}</p>
              </div>
            </li>
          );
        })}
    </>
  );
}
