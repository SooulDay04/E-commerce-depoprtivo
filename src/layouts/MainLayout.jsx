import React from "react";
import NavbarController from "../components/navbar/NavbarController";

const MainLayout = ({ children, cartItems }) => {
  return (
    <>
      <NavbarController cartItems={cartItems} />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;