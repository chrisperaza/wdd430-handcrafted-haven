'use client';

import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './search-bar';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { checkAuth } from '@/app/lib/auth';

export default function Header() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function checkUserAuth() {
      const userData = await checkAuth();
      if (userData) {
        setUser(userData);
      }
    }

    checkUserAuth();
  }, []);

  return (
    <header className='border-b border-border-1 bg-background px-[5%] py-[15px] sticky top-0 z-20 font-poppins'>
      <div className='flex flex-row justify-between max-w-[1400px] mx-auto items-center gap-[5%]'>
        <Link href={'/discover'} title='Discover'>
          <Image
            className='rounded-full w-fit h-fit hover:scale-[1.1]'
            src={
              'https://res.cloudinary.com/dx29auvvm/image/upload/v1744250917/logo-handcrafted-haven-2_vcl0qj.png'
            }
            alt='Handcrafted Haven logo'
            width={40}
            height={40}
          />
        </Link>
        <Suspense>
          <SearchBar />
        </Suspense>
        <div className='hover:scale-[1.1]'>
          {user ? (
            <Link
              className='bg-tertiary py-[12px] px-[25px] rounded-[8px] text-[#fff] hover:bg-primary'
              href={'/user'}
              title='User account'
            >
              {user.name}
            </Link>
          ) : (
            <Link
              className='bg-primary py-[12px] px-[25px] rounded-[8px] text-[#fff] hover:bg-tertiary'
              href={'/login'}
              title='Login'
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
