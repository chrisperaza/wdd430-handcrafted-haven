import { getSellers } from '@/app/lib/data';
import SearchBar from '@/app/ui/sellers/searchBar';
import { Seller } from '@/app/ui/sellers/types';


export default async function Page() {
  const sellers = await getSellers();

  return <SearchBar initialSellers={sellers} />;
}
