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

    {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#0d0d0d] py-20 px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Izquierda - Copyright */}
          <p className="text-gray-500 text-xs tracking-widest uppercase">
            ©2026 <span className="text-white font-black">Nombre</span>
          </p>

          {/* Centro - Logo + tagline */}
          <div className="flex flex-col items-center gap-2">
            <span
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "4px" }}
              className="text-[#24DB67] text-2xl"
            >
              NOMBRE
            </span>
            <p className="text-gray-500 text-xs tracking-widest text-center">
              TU DESTINO DEPORTIVO
            </p>
          </div>

          {/* Derecha - Redes sociales */}
          <div className="flex items-center gap-3">
            {[
              {
                label: "Instagram",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
              },
              {
                label: "Twitter/X",
                path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.213 5.567 5.951-6.567zm-1.161 17.52h1.833L7.084 4.126H5.117z",
              },
              {
                label: "YouTube",
                path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              },
              {
                label: "Facebook",
                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
            ].map((social) => (
              <button
                key={social.label}
                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#24DB67]/20 border border-white/10 hover:border-[#24DB67]/40 flex items-center justify-center transition-all duration-200 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400 group-hover:text-[#24DB67] transition-colors duration-200"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={social.path} />
                </svg>
              </button>
            ))}
          </div>

        </div>
      </footer>

    </div>
  );
};

export default HomeView;