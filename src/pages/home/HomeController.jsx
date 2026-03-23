import React from "react";
import HomeView from "./HomeView";

const HomeController = () => {
  const stats = {
    cartItems: 3,
    items: [
      { value: "500+", label: "Productos" },
      { value: "5 0K+", label: "Clientes" },
      { value: "4.9★", label: "Valoración" },
    ],
  };

  const handleExplore = () => {
    console.log("Navegar a tienda");
  };

  const handleOffers = () => {
    console.log("Navegar a ofertas");
  };

  return (
    <HomeView
      stats={stats}
      onExplore={handleExplore}
      onOffers={handleOffers}
    />
  );
};

export default HomeController;