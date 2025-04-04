import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <nav className='w-[250px] h-screen font-poppins'>
      <div className='w-[250px] bg-background'></div>
      <ul className='flex flex-col gap-[5px] fixed w-[250px]'>
        <NavLinks />
      </ul>
      <button className='fixed bottom-[20px] bg-container-1 w-[250px] rounded-[10px] py-[12px] px-[25px] text-left hover:cursor-pointer hover:bg-container-2'>
        Sign out
      </button>
    </nav>
  );
}
