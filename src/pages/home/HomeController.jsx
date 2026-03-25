import React from "react";
import MainLayout from "../../layouts/MainLayout";
import HomeView from "./HomeView";

const HomeController = () => {
  const stats = {
    items: [
      { value: "0+", label: "Productos" },
      { value: "0+", label: "Clientes" },
      { value: "0★", label: "Valoración" },
    ],
  };

  const benefits = [
    { icon: "🚚", title: "Envío Gratis", subtitle: "En compras +$50" },
    { icon: "↩️", title: "Devoluciones", subtitle: "30 días garantía" },
    { icon: "🛡️", title: "Pago Seguro", subtitle: "Datos protegidos" },
    { icon: "🎧", title: "Soporte 24/7", subtitle: "Siempre disponibles" },
  ];

  const categories = [
    { id: 1, name: "Running", count: 0, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
    { id: 2, name: "Gimnasio", count: 0, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80" },
    { id: 3, name: "Fútbol", count: 0, image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&q=80" },
    { id: 4, name: "Yoga", count: 0, image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&q=80" },
    { id: 5, name: "Basketball", count: 0, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80" },
    { id: 6, name: "Natación", count: 0, image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80" },
  ];

  const handleExplore = () => console.log("Navegar a tienda");
  const handleOffers = () => console.log("Navegar a ofertas");

  return (
    <MainLayout cartItems={0}>
      <HomeView
        stats={stats}
        benefits={benefits}
        categories={categories}
        onExplore={handleExplore}
        onOffers={handleOffers}
      />
    </MainLayout>
  );
};

export default HomeController;