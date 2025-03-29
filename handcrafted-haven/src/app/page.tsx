import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover | Handcrafted Haven',
};

export default function Home() {
  return (
    <main className='px-[5%] py-[15px]'>
      <div className='max-w-[1400px]'>
        <h1>Discover</h1>
      </div>
    </main>
  );
}
