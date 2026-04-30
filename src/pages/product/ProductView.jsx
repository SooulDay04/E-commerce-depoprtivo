import React from "react";

const StarRating = ({ rating, size = "md" }) => {
  const s = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} xmlns="http://www.w3.org/2000/svg"
          className={`${s} ${star <= Math.round(rating) ? "text-[#24DB67]" : "text-gray-600"}`}
          viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="text-gray-400 text-xs ml-1">({rating})</span>
    </div>
  );
};

const SizeSelector = ({ product, selectedSize, onSizeSelect }) => {
  if (product.sizeType === "unitalla" || product.sizes.length === 0) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 uppercase tracking-widest">Talla:</span>
        <span className="px-3 py-1 rounded-lg bg-[#24DB67]/10 text-[#24DB67] text-sm font-bold border border-[#24DB67]/30">
          Unitalla
        </span>
      </div>
    );
  }

  const label = {
    calzado: "TALLA (EU)",
    ropa: "TALLA",
    peso: "PESO",
    resistencia: "RESISTENCIA",
  }[product.sizeType] || "TALLA";

  return (
    <div>
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">{label}</p>
      <div className="flex flex-wrap gap-2">
        {product.sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all duration-200 ${
              selectedSize === size
                ? "bg-[#24DB67] text-black border-[#24DB67]"
                : "bg-[#1a1a1a] text-gray-300 border-white/15 hover:border-[#24DB67]/50"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

const TabIcon = ({ tab }) => {
  const icons = {
    descripcion: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    caracteristicas: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    resenas: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  };
  return icons[tab] || null;
};

const ProductView = ({
  product,
  selectedSize,
  selectedImage,
  activeTab,
  onSizeSelect,
  onImageSelect,
  onTabChange,
  onAddToCart,
  onBack,
}) => {
  const tabs = [
    { key: "descripcion", label: "Descripción" },
    { key: "caracteristicas", label: "Características" },
    { key: "resenas", label: "Reseñas" },
  ];

  const needsSize = product.sizeType !== "unitalla" && product.sizes.length > 0;

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-24 pb-20">

      {/* Back button */}
      <div className="px-8 md:px-16 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-[#24DB67] transition-colors duration-200 text-sm group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Seguir comprando
        </button>
      </div>

      {/* Main content */}
      <div className="px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT — Images */}
        <div className="flex flex-col gap-4">
          {/* Main image */}
          <div className="w-full h-96 lg:h-[480px] rounded-2xl overflow-hidden bg-[#161616] border border-white/8">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => onImageSelect(i)}
                className={`w-24 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                  selectedImage === i ? "border-[#24DB67]" : "border-white/10 hover:border-white/30"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — Info */}
        <div className="flex flex-col gap-6">
          {/* Category badge */}
          <span className="inline-block w-fit bg-[#24DB67]/10 text-[#24DB67] text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-[#24DB67]/20">
            {product.category}
          </span>

          {/* Name */}
          <h1
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
            className="text-5xl md:text-6xl uppercase leading-none"
          >
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <StarRating rating={product.rating} />
            <span className="text-gray-500 text-sm">{product.reviews} reseñas</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              className="text-[#24DB67] text-5xl"
            >
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 text-xl line-through">${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <span className="bg-[#24DB67]/10 text-[#24DB67] text-xs font-bold px-2 py-1 rounded-md border border-[#24DB67]/20">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          {/* Size selector */}
          <SizeSelector
            product={product}
            selectedSize={selectedSize}
            onSizeSelect={onSizeSelect}
          />

          {/* Add to cart */}
          <button
            onClick={onAddToCart}
            disabled={needsSize && !selectedSize}
            className={`w-full py-4 rounded-xl font-black text-lg tracking-widest uppercase transition-all duration-200 ${
              needsSize && !selectedSize
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-[#24DB67] hover:bg-[#1fc45a] text-black"
            }`}
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "3px" }}
          >
            {needsSize && !selectedSize ? "Selecciona una talla" : "Añadir al carrito"}
          </button>

          {needsSize && !selectedSize && (
            <p className="text-xs text-gray-500 text-center -mt-4">
              Por favor selecciona una opción antes de agregar al carrito
            </p>
          )}

          {/* Tabs */}
          <div className="border-t border-white/10 pt-6">
            <div className="flex gap-6 border-b border-white/10 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => onTabChange(tab.key)}
                  className={`flex items-center gap-2 pb-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 border-b-2 -mb-px ${
                    activeTab === tab.key
                      ? "border-[#24DB67] text-[#24DB67]"
                      : "border-transparent text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <TabIcon tab={tab.key} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === "descripcion" && (
              <p className="text-gray-300 leading-relaxed text-sm">
                {product.description}
              </p>
            )}

            {activeTab === "caracteristicas" && (
              <ul className="flex flex-col gap-3">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#24DB67] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {activeTab === "resenas" && (
              <div className="flex flex-col gap-4">
                {product.reviewsList.map((r, i) => (
                  <div key={i} className="bg-[#161616] border border-white/8 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[#24DB67]/20 flex items-center justify-center">
                          <span className="text-[#24DB67] text-xs font-black">{r.user[0]}</span>
                        </div>
                        <span className="text-white text-sm font-bold">{r.user}</span>
                      </div>
                      <StarRating rating={r.rating} size="sm" />
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;