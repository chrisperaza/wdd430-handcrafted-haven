import Image from 'next/image';
import { productsArray } from '@/database/products';

export default function Page() {
  return (
    <section className='py-10 w-full flex flex-col justify-center text-center'>
      <h1 className='text-2xl font-bold pb-10'>Products Array</h1>

      <ul className='flex flex-row flex-wrap gap-10 justify-center'>
        {productsArray.map((currentProductObj, index) => (
          <li key={index}>
            <Image
              src={currentProductObj.image}
              alt={`${currentProductObj.productName} image`}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: 200, height: 'auto' }}
            />
            <h2>{currentProductObj.productName}</h2>
            <p>{currentProductObj.sellerUsername}</p>
            <p>{`$${currentProductObj.price}`}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
