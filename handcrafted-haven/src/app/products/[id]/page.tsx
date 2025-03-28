export default function Page() {
    // TODO:
    // 1. Create separate components that will recieve props from this page component
    // 2. Create a function that will fetch the data from the product, as well as the reviews
    // 3. Create a function that will post the review to the database
    return (
        <>
            <div className="lg:flex lg:items-center lg:justify-between mb-6">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                        Discover | Product Name
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {/* Product Card */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZqj-XReJ2R76nji51cZl4ETk6-eHRmZBRw&s" alt="Product Image" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Product Name</div>
                        <p className="text-gray-700 text-base">Price</p>
                        <p className="text-gray-700 text-base">Description</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <p className="text-gray-700 text-base flex items-center gap-2">
                            <img
                                alt="Seller"
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                className="size-10 rounded-full ring-2 ring-white"
                            />
                            User Selling
                        </p>
                    </div>
                </div>

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
                    <div className="p-4 bg-white shadow-md rounded-md">
                        <article>
                            <div className="flex items-center mb-4">
                                <img
                                    alt="Reviewer"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                    className="size-10 rounded-full ring-2 ring-white"
                                />
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900">Jese Leos</p>
                                    <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500">
                                        Joined on August 2014
                                    </time>
                                </div>
                            </div>

                            <div className="flex items-center mb-2 space-x-1">
                                {[...Array(4)].map((_, index) => (
                                    <svg key={index} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <h3 className="ml-2 text-sm font-semibold text-gray-900">Thinking to buy another one!</h3>
                            </div>

                            <footer className="mb-2 text-sm text-gray-500">
                                Reviewed in the UK on <time dateTime="2017-03-03">March 3, 2017</time>
                            </footer>

                            <p className="text-gray-600">
                                This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday, and I went in the shower with it to test the waterproofing... No problems.
                            </p>
                            <p className="mt-2 text-gray-600">
                                It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
