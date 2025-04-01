
import { productsArray } from "@/database/products";
import { sellersArray } from "@/database/sellers";
import CustomersReviews from "@/app/ui/products/reviews";
import ProductCard from "@/app/ui/products/card";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = parseInt(params.id);

    const product = productsArray.find((product) => product.id === id);
    console.log(product)
    if (!product) {
        return <div>Product not found</div>;
    }

    const seller = sellersArray.find((seller) => seller.username === product.sellerUsername);
    console.log(seller)
    if (!seller) {
        return <div>Seller not found</div>;
    }

    const reviews = product.reviews;
    reviews.forEach(review => {

    });


    return (
        <>

            <div className="lg:flex lg:items-center lg:justify-between mb-6">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                        Discover | {product.productName}
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Product Card */}
                <ProductCard product={product} seller={seller} />

                {/* Right Column: Review Form & Reviews */}
                <div className="flex flex-col gap-4">
                    {/* Review Form */}
                    <form className="p-4 bg-white shadow-md rounded-md">
                        <h2 className="text-lg font-semibold text-gray-900">Write Your Review</h2>
                        <div className="mt-2">
                            <textarea
                                id="review"
                                name="review"
                                rows={3}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Share your experience..."
                            />
                        </div>
                        <div className="mt-3 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Reviews Section */}
                    <CustomersReviews reviews={reviews} />
                </div>
            </div>
        </>
    );
}

