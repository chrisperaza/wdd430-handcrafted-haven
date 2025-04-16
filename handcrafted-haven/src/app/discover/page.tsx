import { Metadata } from 'next';
import GridDiscover from '../ui/discover/grid-discover';
import Footer from '../ui/discover/footer';
import { Suspense } from 'react';
import { getProducts } from '../lib/data';

export const metadata: Metadata = {
  title: 'Discover',
};

export default async function Page() {

  const products = await getProducts();

  return (
    <main className='w-[75%] z-10'>
      <section className='w-full flex flex-col content-center gap-[5px]'>
        <h1 className='w-full text-4xl font-medium ml-[15px] my-[12px] font-poppins text-title-1'>
          Discover
        </h1>
        <Suspense>
          <GridDiscover productsArray={products} />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
