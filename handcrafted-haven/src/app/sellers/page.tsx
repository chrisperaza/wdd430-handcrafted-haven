import { getSellers } from '@/app/lib/data';
import SearchBar from '@/app/ui/sellers/searchBar';
import { Seller } from '@/app/lib/types';
import { Metadata } from 'next';



// TODO: Maybe add a hero banner to fill black space (suggestion)
export const metadata: Metadata = {
  title: 'Sellers',
};

export default async function Page() {
  const sellers = await getSellers();

  return <SearchBar initialSellers={sellers} />;
}
