import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeController from "./home/HomeController";
import ShopController from "./shop/ShopController";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeController />} />
        <Route path="/tienda" element={<ShopController />} />
      </Routes>
    </BrowserRouter>
  );
}