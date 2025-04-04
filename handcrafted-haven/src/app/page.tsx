import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../public/hero-image-hh.png';

export default function Home() {
  return (
    <div className='relative font-poppins'>
      <header className='px-[5%] py-[15px] sticky top-0 z-1'>
        <div className='flex flex-row justify-between max-w-[1400px] mx-auto px-[5%] items-center gap-[5%]'>
          <div className='flex flex-row items-center gap-[10px]'>
            <Image
              className='rounded-full w-fit h-fit'
              src={
                'https://res.cloudinary.com/dx29auvvm/image/upload/v1743119474/logo-handcrafted-haven_asgcfu.png'
              }
              alt='Handcrafted Haven logo'
              width={40}
              height={40}
            />
            <h1 className='font-medium'>Hancrafted Haven</h1>
          </div>
        </div>
      </header>
      <main className='px-[5%] pt-[70px] flex flex-row max-w-[1400px] mx-auto'>
        <section className='z-1 w-[60%] flex flex-col items-start'>
          <h2 className='text-[25px]'>
            The largest <span className='text-title-2'>craft</span> community.
          </h2>
          <p className='text-[100px] text-sm/26 mb-[60px] my-[15px]'>
            <span className='text-title-2'>Share</span> your creations
          </p>
          <div className='hover:scale-[1.1]'>
            <Link
              className='bg-tertiary py-[15px] px-[30px] rounded-[8px] text-[#fff] text-[18px] hover:bg-primary'
              href={'/login'}
              title='Login'
            >
              Login and join us
            </Link>
          </div>
        </section>
        <Image
          className='absolute top-0 right-[100px] z-0'
          src={HeroImage}
          alt='Hero image'
          width={680}
          height={680}
        />
      </main>
    </div>
  );
}
