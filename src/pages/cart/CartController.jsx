import React from "react";
import MainLayout from "../../layouts/MainLayout";
import CartView from "./CartView";
import { useCart } from "../../context/CartContext";

const CartController = () => {
  const { cartItems, totalItems } = useCart();

  return (
    <MainLayout cartItems={totalItems}>
      <CartView cartItems={cartItems} />
    </MainLayout>
  );
};

export default CartController;
