import React from "react";

const CartView = ({
  isOpen,
  cartItems,
  subtotal,
  onClose,
  onRemove,
  onIncrease,
  onDecrease,
  onCheckout,
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#0f0f0f] border-l border-white/10 z-50 flex flex-col transition-transform duration-400 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
            className="text-2xl text-white"
          >
            TU CARRITO{" "}
            <span className="text-[#24DB67]">
              ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              <p className="text-gray-500 text-sm">Tu carrito está vacío</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 bg-[#161616] border border-white/8 rounded-xl p-3 group"
              >
                {/* Image */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-[#1a1a1a] shrink-0">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-80"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                    className="text-white text-base leading-tight truncate"
                  >
                    {item.name}
                  </p>
                  {item.size && (
                    <p className="text-gray-500 text-xs mt-0.5">Talla: {item.size}</p>
                  )}
                  <p className="text-[#24DB67] font-black text-sm mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onDecrease(item.key)}
                      className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm flex items-center justify-center transition-colors"
                    >
                      −
                    </button>
                    <span className="text-white text-sm font-bold w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onIncrease(item.key)}
                      className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm flex items-center justify-center transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => onRemove(item.key)}
                  className="self-start opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-gray-600 hover:text-red-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/10 px-6 py-5 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                  className="text-gray-400 text-base"
                >
                  SUBTOTAL
                </span>
                <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1px" }}
                  className="text-white text-base"
                >
                  TOTAL
                </span>
                <span
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  className="text-[#24DB67] text-xl"
                >
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={onCheckout}
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "3px" }}
              className="w-full py-4 bg-[#24DB67] hover:bg-[#1fc45a] text-black font-black text-lg rounded-xl transition-all duration-200 uppercase"
            >
              Finalizar Pedido
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartView;