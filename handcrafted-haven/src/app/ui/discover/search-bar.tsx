'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const params = new URLSearchParams(searchParams);

    if (searchTerm) {
      params.set('query', searchTerm);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='relative w-[100%] max-w-[1000px]'>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <input
        className='bg-container-1 pl-[55px] py-[10px] px-[20px] w-[100%] rounded-full placeholderColor-[#fff]'
        type='text'
        title='Search for some product'
        placeholder='Search for something'
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
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
  );
}
