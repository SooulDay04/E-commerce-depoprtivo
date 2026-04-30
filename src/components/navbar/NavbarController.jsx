import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarView from "./NavbarView";

const NavbarController = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/carrito");
  };

  return <NavbarView cartItems={cartItems} onCartClick={handleCartClick} />;
};

export default NavbarController;