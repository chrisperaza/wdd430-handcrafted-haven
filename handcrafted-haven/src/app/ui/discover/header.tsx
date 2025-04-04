import Image from 'next/image';
import Link from 'next/link';

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
        <div className='relative w-[100%] max-w-[1000px]'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <input
            className='bg-container-1 pl-[55px] py-[10px] px-[20px] w-[100%] rounded-full placeholderColor-[#fff]'
            type='text'
            title='Search for some product'
            placeholder='Search for something'
          />
          <svg
            className='absolute left-5 top-1/2 -translate-y-1/2 fill-primary'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
          </svg>
        </div>
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
