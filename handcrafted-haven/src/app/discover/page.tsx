import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { productsArray } from '@/database/products';
import Footer from '../ui/discover/footer';

export const metadata: Metadata = {
  title: 'Discover',
};

export default function Page() {
  return (
    <main className='w-[75%] z-10'>
      <section className='w-full flex flex-col content-center gap-[5px]'>
        <h1 className='w-full text-4xl font-medium ml-[15px] my-[12px] font-poppins text text-[#313131]'>
          Discover
        </h1>
        <ul className='grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-y-10'>
          {productsArray.map((currentProductObj, index) => (
            <li
              key={index}
              className='hover:bg-accent-6 hover:scale-105 transform transition duration-200 ease-in-out rounded-[10px] p-[15px]'
            >
              <Link href={`/products/${currentProductObj.id}`}>
                <Image
                  className='rounded-[10px] mb-[5px]'
                  src={currentProductObj.image}
                  alt={`${currentProductObj.productName} image`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className='font-poppins flex flex-col gap-[5px]'>
                  <h2 className='text-base font-normal text-[#313131]'>
                    {currentProductObj.productName}
                  </h2>
                  <p className='text-sm font-light text-[#686868]'>{`$${currentProductObj.price}`}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </main>
  );
}
