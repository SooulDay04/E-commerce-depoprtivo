import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-3 h-3 ${star <= Math.round(rating) ? "text-[#24DB67]" : "text-gray-600"}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="text-gray-400 text-xs ml-1">({rating})</span>
    </div>
  );
};

const ProductCard = ({ product, isFavorite, onToggleFavorite, onAddToCart }) => {
  return (
    <div className="bg-[#161616] border border-white/8 rounded-2xl overflow-hidden group hover:border-[#24DB67]/30 transition-all duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-[#1a1a1a]">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
          />
        )}
        {/* Favorite button */}
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-colors duration-200 ${isFavorite ? "text-[#24DB67] fill-[#24DB67]" : "text-white fill-none"}`}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[#24DB67] text-[10px] font-bold tracking-widest uppercase mb-1">
          {product.category}
        </p>
        <h3 className="text-white font-bold text-sm mb-2 leading-snug">
          {product.name}
        </h3>
        <StarRating rating={product.rating} />

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-baseline gap-2">
            <span className="text-white font-black text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-gray-500 text-xs line-through">${product.originalPrice}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-1 bg-[#24DB67] hover:bg-[#1fc45a] text-black font-bold text-xs px-4 py-2 rounded-lg transition-all duration-200 tracking-wide"
          >
            AGREGAR +
          </button>
        </div>
      </div>
    </div>
  );
};

const ShopView = ({
  filters,
  products,
  activeFilter,
  favorites,
  onFilterChange,
  onToggleFavorite,
  onAddToCart,
}) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-24 px-8 md:px-16 pb-20">

      {/* Header */}
      <div className="mb-8">
        <h1
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
          className="text-5xl md:text-6xl uppercase"
        >
          <span className="text-white">LO MEJOR PARA </span>
          <span className="bg-linear-to-r from-[#24DB67] to-[#A6EE2B] bg-clip-text text-transparent">
            TI
          </span>
        </h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${
              activeFilter === filter
                ? "bg-[#24DB67] text-black border-[#24DB67]"
                : "bg-transparent text-gray-300 border-white/15 hover:border-[#24DB67]/50 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites[product.id]}
            onToggleFavorite={onToggleFavorite}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* Empty state */}
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <p className="text-gray-500 text-lg">No hay productos en esta categoría.</p>
        </div>
      )}

    </div>
  );
};

export default ShopView;