import Header from '../ui/discover/header';
import SideNav from '../ui/discover/sideNav';

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className='px-[5%] py-[20px] flex flex-row max-w-[1400px]'>
        <SideNav />
        {children}
      </div>
    </div>
  );
}
