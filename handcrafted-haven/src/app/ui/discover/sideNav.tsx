import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <nav className='w-[250px] h-screen font-poppins'>
      <div className='w-[250px] bg-background'></div>
      <ul className='flex flex-col gap-[5px] fixed w-[250px]'>
        <NavLinks />
      </ul>
    </nav>
  );
}
