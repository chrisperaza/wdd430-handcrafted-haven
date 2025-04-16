'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Seller = {
  id: number;
  fullname: string;
};

export default function SellerSearchBar({ initialSellers }: { initialSellers: Seller[] }) {
  const [query, setQuery] = useState('');
  const [sellers] = useState(initialSellers);
  const router = useRouter();

  const filteredSellers = sellers.filter((seller) =>
    seller.fullname.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: number) => {
    router.push(`/sellers/${id}`);
  };

  return (
    <div className="max-w-xl mx-auto mb-8">
      <input
        type="text"
        placeholder="Search sellers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {query && (
        <ul className="mt-2 border rounded-xl shadow bg-white">
          {filteredSellers.length === 0 && (
            <li className="px-4 py-2 text-gray-500">No sellers found</li>
          )}
          {filteredSellers.map((seller) => (
            <li
              key={seller.id}
              onClick={() => handleSelect(seller.id)}
              className="px-4 py-2 hover:bg-indigo-50 cursor-pointer"
            >
              {seller.fullname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}