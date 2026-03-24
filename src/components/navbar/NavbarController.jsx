import React from "react";
import NavbarView from "./NavbarView";

const NavbarController = ({ cartItems }) => {
  return <NavbarView cartItems={cartItems} />;
};

export default NavbarController;