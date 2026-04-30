import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeController from "./home/HomeController";
import ShopController from "./shop/ShopController";
import ScrollToTop from "../components/ScrollTop";
import ProductController from "./product/ProductController";
import CartController from "./cart/CartController";

import RegistroView from "./Registro/RegistroView";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="/tienda" element={<ShopController />} />
        <Route path="/producto/:id" element={<ProductController />} />
        <Route path="/carrito" element={<CartController />} />
      </Routes>
    </BrowserRouter>
  );
}