import React from "react";

const NavbarView = ({ cartItems }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-white/5">
      <span className="text-[#24DB67] font-black text-xl tracking-widest uppercase">
          Nombre
        </span>

        <ul className="hidden md:flex gap-8 text-lg text-gray-300">
          {["Inicio", "Categorías", "Tienda", "Ofertas", "Nosotros"].map((item) => (
            <li key={item} className="hover:text-green-500 cursor-pointer transition-colors duration-200 font-Trispace">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <button className="text-gray-300 hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button className="relative text-gray-300 hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7h12.8M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#24DB67] text-black text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center leading-none">
              {cartItems}
            </span>
          </button>
        </div>
    </nav>
  );
};

export default NavbarView;