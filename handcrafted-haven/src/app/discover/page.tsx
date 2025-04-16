// 'use client';

import { Metadata } from 'next';
import GridDiscover2 from '../ui/discover/grid-discover2';
import Footer from '../ui/discover/footer';
// import { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Discover',
};

export default function Page() {
  // const searchParams = useSearchParams();
  // const query = searchParams.get('query')?.toString() || '';
  return (
    <main className='w-[75%] z-10'>
      <section className='w-full flex flex-col content-center gap-[5px]'>
        <h1 className='w-full text-4xl font-medium ml-[15px] my-[12px] font-poppins text-title-1'>
          Discover
        </h1>
        <GridDiscover2 />
      </section>
      <Footer />
    </main>
  );
}
