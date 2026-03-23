import React, { useState, useRef } from "react";

const HomeView = ({ stats, benefits, categories, onExplore, onOffers }) => {
const [startIndex, setStartIndex] = useState(0);
const [direction, setDirection] = useState("right");

const scrollLeft = () => {
  setDirection("left");
  setStartIndex((prev) => (prev - 1 + categories.length) % categories.length);
};

const scrollRight = () => {
  setDirection("right");
  setStartIndex((prev) => (prev + 1) % categories.length);
};

  
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

      {/* BENEFICIOS */}
      <div className="border-y border-white/10 bg-[#111111]">
        <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-white/10">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-center gap-4 px-8 py-5 flex-1 min-w-50">
              <div className="w-10 h-10 rounded-lg bg-[#24DB67]/10 flex items-center justify-center ">
                <span className="text-[#24DB67] text-xl">{benefit.icon}</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">{benefit.title}</p>
                <p className="text-gray-400 text-xs mt-0.5">{benefit.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIAS */}
      <section className="bg-[#0d0d0d] px-8 md:px-16 py-20">
        <div className="mb-10">
          <span className="inline-block bg-[#24DB67]/10 text-[#24DB67] text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Categorías
          </span>
          <h2
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
            className="text-5xl md:text-6xl uppercase"
          >
            <span className="text-white">ENCUENTRA TU </span>
            <span className="bg-linear-to-r from-[#24DB67] to-[#A6EE2B] bg-clip-text text-transparent">
              DEPORTE
            </span>
          </h2>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={scrollLeft}
            className="ml-55 mr-3 shrink-0 w-14 h-32 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 rounded-xl flex items-center justify-center transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#24DB67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div key={startIndex}
            className={`flex gap-4 overflow-hidden 
            ${direction === "right" ? "animate-slide-right" : "animate-slide-left"}`}>
                
            {[...categories, ...categories]
                .slice(startIndex, startIndex + 5)
                .map((cat, i) => (
                <div
                    key={i}
                    className="shrink-0 w-56 h-80 rounded-2xl border border-white/10 bg-[#161616] hover:border-[#24DB67]/40 transition-all duration-300 cursor-pointer overflow-hidden relative group"
                >
                    <div className="absolute inset-0">
                    {cat.image ? (
                        <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                        />
                    ) : (
            <div className="w-full h-full bg-[#1a1a1a]" />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "1.5px" }}
                        className="text-white text-xl uppercase"
                    >
                        {cat.name}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{cat.count} productos</p>
                    </div>
                </div>
                ))}
            </div>

          <button
            onClick={scrollRight}
            className="shrink-0 w-14 h-32 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 rounded-xl flex items-center justify-center ml-3 transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#24DB67]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

    </div>
  );
};

export default HomeView;