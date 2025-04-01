export default function CustomersReviews({
    reviews,
}: {
    reviews: {
        userNameReview: string;
        contentReview: string;
        ratingReview: number;
    }[];
}) {
    return (
        <div className="p-4 bg-white shadow-md rounded-md transform transition duration-300 ease-in-out hover:scale-105">
            <article>
                {reviews?.map((review, index) => (
                    <div key={index} className="mb-6 ">
                        <div className="flex items-center mb-2">
                            <div className="ml-3">
                                <p className="font-medium text-gray-900">{review.userNameReview}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-2 space-x-1">
                            {[...Array(review.ratingReview)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 text-yellow-300"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            ))}
                        </div>

                        <p className="text-gray-600">{review.contentReview}</p>
                    </div>
                ))}
            </article>
        </div>
    );
}
