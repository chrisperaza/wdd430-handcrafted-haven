import { productsArray } from '@/database/products';
import { sellersArray } from '@/database/sellers';
import ProductCard from '@/app/ui/sellers/card';
import Image from 'next/image';


// TODO: Use PostgreSQL to fetch data from the database
// TODO: Show seller's story

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = parseInt(params.id);

  const seller = sellersArray.find((seller) => seller.id === id);
  console.log(seller);
  if (!seller) {
    return <div>Product not found</div>;
  }

  const products = productsArray.filter(
    (product) => product.sellerUsername === seller.username
  );
  console.log(seller);
  if (!seller) {
    return <div>Seller not found</div>;
  }

  return (
    <>
      <div className='container mx-auto p-6'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            {`Seller's Page | ${seller.fullname}`}
          </h2>
          <p className='text-gray-600 mt-2 text-lg flex items-center gap-2'>
            <Image
              alt='Seller'
              src={seller.image}
              width={120}
              height={120}
              className=' rounded-full ring-2 ring-white'
            />{' '}
            By {seller.fullname}
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          {/* Product Card Section with Zoom Effect */}
          {products.map((product) => (
            <div className='flex justify-center' key={product.id}>
              <div className='overflow-hidden rounded-xl shadow-md transform transition duration-300 ease-in-out hover:scale-105'>
                <ProductCard product={product} seller={seller} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
