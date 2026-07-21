// BOOK CARD COMPONENT

function BookCard({ title, author, cover, year, genre, rating, pages, isNew, isBestseller }) {

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative">
                <img src={cover} alt={title} className="w-full h-56 object-cover" />
                {isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                        NEW
                    </span>
                )}
                {isBestseller && (
                    <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                        🔥 BESTSELLER
                    </span>
                )}
            </div>
            <div className="p-5">
                <h3 className="font-bold text-gray-800 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-3">by {author}</p>
                <div className="flex items-center gap-1 mb-2">
                    <span className="text-yellow-500 text-sm">
                        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                    </span>
                    <span className="text-gray-400 text-xs">
                        {rating}/5
                    </span>
                 </div>
                <div className="flext items-center gap-1 mb-3 text-gray-500 text-sm">
                    <span>📄</span><span>{pages} pages</span>
                </div>
                <div className="flex gap-2">
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                        {year}
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                        {genre}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BookCard;