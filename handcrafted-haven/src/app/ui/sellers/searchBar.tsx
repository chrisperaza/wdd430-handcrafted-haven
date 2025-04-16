'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Seller } from '@/app/lib/types';


export default function SellerSearchBar({ initialSellers }: { initialSellers: Seller[] }) {
  const [query, setQuery] = useState('');
  const [sellers] = useState(initialSellers);
  const router = useRouter();

  const filteredSellers = sellers.filter((seller) =>
    seller.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (id: string) => {
    router.push(`/sellers/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto mb-8 px-4">
      <input
        type="text"
        placeholder="Search sellers..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      {query && filteredSellers.length === 0 && (
        <p className="mt-4 text-gray-500 text-center">No sellers found.</p>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSellers.map((seller) => (
          <div
            key={seller.id}
            className="bg-white rounded-2xl shadow-md p-4 flex items-center space-x-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleSelect(seller.id)}
          >
            <img
              src={seller.avatar}
              alt={seller.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500"
            />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{seller.name}</h2>
              <p className="text-sm text-gray-500">@{seller.username}</p>
              <p className="text-sm text-gray-400">{seller.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}