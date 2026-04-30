import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartView from "./CartView";

const CartController = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <CartView
      isOpen={isCartOpen}
      cartItems={cartItems}
      subtotal={subtotal}
      onClose={() => setIsCartOpen(false)}
      onRemove={removeFromCart}
      onIncrease={increaseQuantity}
      onDecrease={decreaseQuantity}
      onCheckout={handleCheckout}
    />
  );
};

export default CartController;