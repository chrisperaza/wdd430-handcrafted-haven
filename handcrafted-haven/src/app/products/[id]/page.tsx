import { productsArray } from '@/database/products';
import { sellersArray } from '@/database/sellers';
import CustomersReviews from '@/app/ui/products/reviews';
import ProductCard from '@/app/ui/products/card';
import { getProductById } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = parseInt(params.id);

  const product_db = await getProductById("dcddb3c8-fb43-4d00-b28b-751f7529cb29");
  console.log("bellow the data");
  console.log(product_db);

  const product = productsArray.find((product) => product.id === id);
  // console.log(product);
  if (!product) {
    return <div>Product not found</div>;
  }

  const seller = sellersArray.find(
    (seller) => seller.username === product.sellerUsername
  );
  // console.log(seller);
  if (!seller) {
    return <div>Seller not found</div>;
  }

  // const reviews = product.reviews;
  // reviews.forEach(review => {

  // });

  return (
    <>
      <div className='container mx-auto p-6'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            Discover | {product.productName}
          </h2>
          <p className='text-gray-600 mt-2 text-lg'>By {seller.fullname}</p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          {/* Product Card Section with Zoom Effect */}
          <div className='flex justify-center'>
            <div className='overflow-hidden rounded-xl shadow-md transform transition duration-300 ease-in-out hover:scale-105'>
              <ProductCard product={product} seller={seller} />
            </div>
          </div>

          {/* Right Column: Review Form & Reviews */}
          <div className='w-full max-w-lg mx-auto lg:mx-0'>
            {/* Review Form */}
            <div className='bg-white p-6 shadow-lg rounded-xl transform transition duration-300 ease-in-out hover:scale-105'>
              <h3 className='text-lg font-semibold text-gray-900 mb-4'>
                Write Your Review
              </h3>
              <textarea
                id='review'
                name='review'
                rows={4}
                className='block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 focus:ring-2 focus:ring-indigo-600 focus:outline-none'
                placeholder='Share your experience...'
              />
              <button
                type='submit'
                className='mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md transition-all'
              >
                Submit Review
              </button>
            </div>

            {/* Reviews Section */}
            <div className='mt-6'>
              <CustomersReviews reviews={product.reviews} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
