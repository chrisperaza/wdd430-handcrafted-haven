import Form from 'next/form';
import CustomersReviews from '@/app/ui/products/reviews';
import ProductCard from '@/app/ui/products/card';
import { getProductById, getUserById, getProductReviews } from '@/app/lib/data';
import { submitReview } from '@/app/lib/post';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const product_db = await getProductById(params.id);
  const seller_db = await getUserById(product_db.seller_id);
  const reviews_db = await getProductReviews(product_db.id);

  const seller_input = {
    id: seller_db.id,
    fullname: seller_db.name,
    username: seller_db.username,
    image: seller_db.avatar,
  };

  const product_input = {
    id: product_db.id,
    productName: product_db.product_name,
    description: product_db.description,
    price: product_db.price,
    image: product_db.image,
    sellerUsername: seller_db.username,
  };

  const reviews_input = reviews_db.map((review) => ({
    userNameReview: review.user.name,
    contentReview: review.content,
    ratingReview: review.rating,
  }));


  return (
    <>
      <div className='container mx-auto p-6'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h2 className='text-3xl font-bold text-gray-900 sm:text-4xl'>
            Discover | {product_db.product_name}
          </h2>
          <p className='text-gray-600 mt-2 text-lg'>By {seller_db.name}</p>
        </div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
          {/* Product Card Section with Zoom Effect */}
          <div className='flex justify-center'>
            <div className='overflow-hidden rounded-xl shadow-md transform transition duration-300 ease-in-out hover:scale-105'>
              <ProductCard product={product_input} seller={seller_input} />
            </div>
          </div>

          {/* Right Column: Review Form & Reviews */}
          <div className='w-full max-w-lg mx-auto lg:mx-0'>
            {/* Review Form */}
            <Form action={submitReview} className='space-y-4'>
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
                  required
                />
                <div className='mt-4'>
                  <label htmlFor='rating' className='block text-sm font-medium text-gray-700'>
                    Rating
                  </label>
                  <select
                    id='rating'
                    name='rating'
                    className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                    required
                  >
                    <option value='' disabled selected>
                      Select a rating
                    </option>
                    <option value='1'>1 - Poor</option>
                    <option value='2'>2 - Fair</option>
                    <option value='3'>3 - Good</option>
                    <option value='4'>4 - Very Good</option>
                    <option value='5'>5 - Excellent</option>
                  </select>
                </div>

                <button
                  type='submit'
                  className='mt-4 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 rounded-md transition-all'
                >
                  Submit Review
                </button>
              </div>

              {/* Hidden Inputs */}
              <input type='hidden' name='product_id' value={product_db.id} />
            </Form>
            {/* Reviews Section */}
            <div className='mt-6'>
              <CustomersReviews reviews={reviews_input} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
