import React from "react";

const HomeView = ({ stats, onExplore, onOffers }) => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white font-Bebas Neue">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-[#0d0d0d]/90 backdrop-blur-sm border-b border-white/5">
        <span className="text-[#24DB67] font-black text-xl tracking-widest uppercase">
          Nombre
        </span>

        <ul className="hidden md:flex gap-8 text-lg text-gray-300">
          {["Inicio", "Categorías", "Productos", "Ofertas", "Nosotros"].map((item) => (
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
              {stats.cartItems}
            </span>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-transparent" />

        <div className="relative z-10 px-8 md:px-16 max-w-2xl">

         <h1
            style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "128px",
                fontWeight: "400",
                lineHeight: "128px",
                letterSpacing: "5.10px",
            }}
                className="uppercase mb-6"
            >
            <span className="text-white block">SUPERA TUS</span>
            <span className="bg-linear-to-r from-[#24DB67] to-[#A6EE2B] bg-clip-text text-transparent">
            LÍMITES
            </span>
          </h1>

          <p className="text-gray-300 font-Space Grotesk leading-relaxed mb-8 max-w-md">
            Descubre la mejor selección de artículos deportivos y ropa de
            entrenamiento. Equípate con lo último en tecnología y rendimiento.
          </p>

          <div className="flex items-center gap-4 mb-14">
            <button
              onClick={onExplore}
              className="flex items-center gap-2 bg-[#24DB67] hover:bg-[#32d212] text-black font-bold px-6 py-3 rounded-lg transition-all duration-200 text-sm tracking-wide"
            >
              Explorar Tienda
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={onOffers}
              className="border border-white/30 hover:border-white text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 text-sm tracking-wide hover:bg-white/5"
            >
              Ver Ofertas
            </button>
          </div>

          <div className="flex items-center gap-10">
            {stats.items.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[#24DB67] font-black text-2xl md:text-3xl leading-none">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-xs mt-1 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;