import { getSellers } from '@/app/lib/data';
import SearchBar from '@/app/ui/sellers/searchBar';

export default async function Page() {
  const sellers = await getSellers();

  // return <SearchBar initialSellers={sellers} />;
}
