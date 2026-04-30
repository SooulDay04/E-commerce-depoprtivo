import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const CartView = ({ cartItems }) => {
  const navigate = useNavigate();
  const { removeFromCart, increaseQuantity, decreaseQuantity, subtotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white pt-24 px-8 md:px-16 pb-20">
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-gray-600 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
            />
          </svg>
          <p className="text-gray-400 text-lg mb-6">Tu carrito está vacío</p>
          <button
            onClick={() => navigate("/tienda")}
            className="bg-[#24DB67] hover:bg-[#1fc45a] text-black font-bold px-6 py-3 rounded-lg transition-all duration-200"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white pt-24 px-8 md:px-16 pb-20">
      <h1
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
        className="text-5xl md:text-6xl uppercase mb-12"
      >
        <span className="text-white">MI </span>
        <span className="bg-linear-to-r from-[#24DB67] to-[#A6EE2B] bg-clip-text text-transparent">
          CARRITO
        </span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2">
          <div className="bg-[#161616] border border-white/8 rounded-2xl p-6">
            {cartItems.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 pb-6 mb-6 border-b border-white/8 last:border-b-0 last:mb-0 last:pb-0"
              >
                {/* Imagen */}
                <div className="w-24 h-24 flex-shrink-0 bg-[#1a1a1a] rounded-lg overflow-hidden">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-white font-bold mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{item.category}</p>
                  {item.size && (
                    <p className="text-[#24DB67] text-xs font-semibold mb-2">
                      Talla: {item.size}
                    </p>
                  )}
                  <p className="text-white font-black text-lg">${item.price}</p>
                </div>

                {/* Cantidad y Acciones */}
                <div className="flex flex-col items-end gap-3">
                  <button
                    onClick={() => removeFromCart(item.key)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center gap-2 bg-[#0d0d0d] rounded-lg p-1">
                    <button
                      onClick={() => decreaseQuantity(item.key)}
                      className="w-6 h-6 flex items-center justify-center text-[#24DB67] hover:bg-white/10 rounded transition-colors"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.key)}
                      className="w-6 h-6 flex items-center justify-center text-[#24DB67] hover:bg-white/10 rounded transition-colors"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-[#24DB67] font-bold text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen */}
        <div className="lg:col-span-1">
          <div className="bg-[#161616] border border-white/8 rounded-2xl p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-white">Resumen</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Envío:</span>
                <span className="text-[#24DB67] font-semibold">Gratis</span>
              </div>
              <div className="border-t border-white/8 pt-4 flex justify-between text-white font-bold text-lg">
                <span>Total:</span>
                <span className="text-[#24DB67]">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-[#24DB67] hover:bg-[#1fc45a] text-black font-bold py-3 rounded-lg mb-3 transition-all duration-200">
              PROCEDER AL PAGO
            </button>

            <button
              onClick={() => navigate("/tienda")}
              className="w-full bg-transparent border border-white/15 text-white hover:border-[#24DB67]/50 hover:text-[#24DB67] font-bold py-3 rounded-lg transition-all duration-200"
            >
              Continuar comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
