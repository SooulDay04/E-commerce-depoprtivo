import React from "react";
import NavbarController from "../components/navbar/NavbarController";
import CartController from "../components/cart/CartController";
import { useCart } from "../context/CartContext";

const MainLayout = ({ children }) => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <>
      <NavbarController
        cartItems={totalItems}
        onCartClick={() => setIsCartOpen(true)}
      />
      <CartController />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;