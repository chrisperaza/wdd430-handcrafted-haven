import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './search-bar';

export default function Header() {
  return (
    <header className='border-b border-border-1 bg-background px-[5%] py-[15px] sticky top-0 z-20 font-poppins'>
      <div className='flex flex-row justify-between max-w-[1400px] mx-auto items-center gap-[5%]'>
        <Link href={'/discover'} title='Discover'>
          <Image
            className='rounded-full w-fit h-fit hover:scale-[1.1]'
            src={
              'https://res.cloudinary.com/dx29auvvm/image/upload/v1743119474/logo-handcrafted-haven_asgcfu.png'
            }
            alt='Handcrafted Haven logo'
            width={40}
            height={40}
          />
        </Link>
        <SearchBar />
        <div className='hover:scale-[1.1]'>
          <Link
            className='bg-tertiary py-[12px] px-[25px] rounded-[8px] text-[#fff] hover:bg-primary'
            href={'/account'}
            title='User account'
          >
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
