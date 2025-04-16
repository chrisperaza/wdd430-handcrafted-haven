import { getSellers } from '@/app/lib/data';
import SearchBar from '@/app/ui/sellers/searchBar';
import { Seller } from '@/app/ui/sellers/types';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Sellers',
};

export default async function Page() {
  const sellers = await getSellers();

  return <SearchBar initialSellers={sellers} />;
}
