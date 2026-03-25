import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ShopView from "./ShopView";

const ShopController = () => {
  const cartItems = 0;

  const filters = ["Todos", "Running", "Gimnasio", "Ropa", "Tecnología", "Accesorios", "Fitness"];

  const products = [
    { id: 1, name: "Zapatillas Velocity Pro", category: "Running", price: 129.99, originalPrice: 159.99, rating: 4.8, reviews: 124, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", favorite: false },
    { id: 2, name: "Conjunto Training Elite", category: "Ropa", price: 89.99, originalPrice: null, rating: 4.6, reviews: 89, image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=400&q=80", favorite: true },
    { id: 3, name: "Smartwatch Sport X3", category: "Tecnología", price: 199.99, originalPrice: 249.99, rating: 4.9, reviews: 210, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80", favorite: false },
    { id: 4, name: "Mancuernas Pro Set", category: "Gimnasio", price: 79.99, originalPrice: null, rating: 4.7, reviews: 65, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80", favorite: false },
    { id: 5, name: "Mochila Sport 40L", category: "Accesorios", price: 59.99, originalPrice: 74.99, rating: 4.5, reviews: 43, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", favorite: false },
    { id: 6, name: "Kit Bandas Elásticas", category: "Fitness", price: 34.99, originalPrice: null, rating: 4.4, reviews: 98, image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&q=80", favorite: true },
    { id: 7, name: "Camiseta Dry-Fit Pro", category: "Ropa", price: 29.99, originalPrice: 39.99, rating: 4.3, reviews: 77, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", favorite: false },
    { id: 8, name: "Rodilleras Compresión", category: "Accesorios", price: 24.99, originalPrice: null, rating: 4.6, reviews: 55, image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=400&q=80", favorite: false },
    { id: 9, name: "Auriculares Sport BT", category: "Tecnología", price: 89.99, originalPrice: 119.99, rating: 4.7, reviews: 134, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80", favorite: false },
  ];

  const [activeFilter, setActiveFilter] = useState("Todos");
  const [favorites, setFavorites] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.favorite }), {})
  );
  const [cart, setCart] = useState([]);

  const filteredProducts =
    activeFilter === "Todos"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const handleToggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    console.log(`Agregado al carrito: ${product.name}`);
  };

  return (
    <MainLayout cartItems={cart.length}>
      <ShopView
        filters={filters}
        products={filteredProducts}
        activeFilter={activeFilter}
        favorites={favorites}
        onFilterChange={setActiveFilter}
        onToggleFavorite={handleToggleFavorite}
        onAddToCart={handleAddToCart}
      />
    </MainLayout>
  );
};

export default ShopController;