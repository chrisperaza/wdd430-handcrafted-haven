import Image from 'next/image';
import { sellersArray } from '@/database/sellers';

export default function Page() {
  return (
    <section className='py-10 w-full flex flex-col justify-center text-center'>
      <h1 className='text-2xl font-bold pb-10'>Sellers Array</h1>

      <ul className='flex flex-row flex-wrap gap-10 justify-center'>
        {sellersArray.map((currentSellerObj, index) => (
          <li key={index}>
            <Image
              className='rounded-full'
              src={currentSellerObj.image}
              alt={`${currentSellerObj.username} image`}
              width={200}
              height={200}
            />
            <h2>{currentSellerObj.fullname}</h2>
            <p>{currentSellerObj.username}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
