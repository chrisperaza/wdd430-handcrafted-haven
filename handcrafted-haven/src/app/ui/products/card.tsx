import Image from 'next/image';

export default function ProductCard({
  product,
  seller,
}: {
  product: {
    id: number;
    productName: string;
    description: string;
    price: number;
    image: string;
    sellerUsername: string;
  };
  seller: {
    id: number;
    fullname: string;
    username: string;
    image: string;
  };
}) {
  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <Image
          className='w-full'
          src={product.image}
          alt={product.productName}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{product.productName}</div>
          <p className='text-gray-700 text-base'>${product.price}</p>
          <p className='text-gray-700 text-base'>{product.description}</p>
        </div>
        <div className='px-6 pt-4 pb-2'>
          <p className='text-gray-700 text-base flex items-center gap-2'>
            <Image
              alt='Seller'
              src={seller.image}
              className='size-10 rounded-full ring-2 ring-white'
              width={60}
              height={60}
            />
            {seller.username}
          </p>
        </div>
      </div>
    </>
  );
}