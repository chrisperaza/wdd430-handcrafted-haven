// import { productsArray } from '@/database/products';
// import { sellersArray } from '@/database/sellers';
import { getProductsbySeller, getUserById } from '@/app/lib/data';
import ProductCard from '@/app/ui/sellers/card';
import Image from 'next/image';


// TODO: Use PostgreSQL to fetch data from the database
// TODO: Show seller's story

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const seller_db = await getUserById(params.id);

  const seller = {
    id: seller_db.id,
    fullname: seller_db.name,
    username: seller_db.username,
    image: seller_db.avatar,
    story: seller_db.story,
  };

  const productsRaw = await getProductsbySeller(seller.id);

  const products = productsRaw.map(product => ({
    id: product.id,
    productName: product.name,
    description: product.description,
    price: product.price,
    image: product.image,
    sellerUsername: seller.username,
  }))



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
          <p className='text-gray-600 mt-2 text-lg flex items-center gap-2'>
            {seller.story}
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
