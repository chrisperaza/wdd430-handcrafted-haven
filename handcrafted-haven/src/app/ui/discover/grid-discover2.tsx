/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { productsArray } from '@/database/products';
import { useSearchParams } from 'next/navigation';
import { getProducts } from '@/app/lib/data';

// TODO: Use PostgreSQL to fetch data from the database
// TODO: Filter by price and by seller or category

// eslint-disable-next-line @next/next/no-async-client-component
export default async function GridDiscover2() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query')?.toString() || '';

  const productsList = await getProducts();

  //   const productsDb = await getProducts();

  const filteredProductsList = Array.isArray(productsList)
    ? productsList.filter((product) => {
        return product.product_name.toLowerCase().includes(query.toLowerCase());
      })
    : [];

  return (
    <>
      {Array.isArray(productsList) && filteredProductsList.length === 0 && (
        <section className='font-poppins p-[15px] justify-items-center'>
          <Image
            src={
              'https://res.cloudinary.com/dx29auvvm/image/upload/v1744251366/not-found_njwx4i.png'
            }
            alt='Man confused searching'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: 300, height: 'auto' }}
          />
          <h2 className='text-2xl font-medium'>
            <span className='text-primary'>No products</span> found
          </h2>
          <p className='text-foreground my-[10px] text-center'>
            Make sure you spelled what you were looking for correctly or try a
            new word.
          </p>
        </section>
      )}
      <ul className='grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-y-10'>
        {Array.isArray(productsList) &&
          filteredProductsList.map((currentProductObj) => (
            <li
              key={currentProductObj.id}
              className='hover:bg-container-1 hover:scale-105 transform transition duration-200 ease-in-out rounded-[10px] p-[15px]'
            >
              <Link href={`/products/${currentProductObj.id}`}>
                <Image
                  className='rounded-[10px] mb-[5px]'
                  src={currentProductObj.image}
                  alt={`${currentProductObj.product_name} image`}
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '100%', height: 'auto' }}
                />
                <div className='font-poppins flex flex-col gap-[5px]'>
                  <h2 className='text-base font-normal text-title-1'>
                    {currentProductObj.product_name}
                  </h2>
                  <p className='text-sm font-normal text-subtitle-1'>{`$${currentProductObj.price}`}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
