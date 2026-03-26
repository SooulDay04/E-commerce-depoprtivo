import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeController from "./home/HomeController";
import ShopController from "./shop/ShopController";
import ScrollToTop from "../components/ScrollTop";

import RegistroView from "./Registro/RegistroView";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="/tienda" element={<ShopController />} />
        <Route path="/login" element={<RegistroView />} />
      </Routes>
    </BrowserRouter>
  );
}