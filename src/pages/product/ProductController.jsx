import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProductView from "./ProductView";
import { useCart } from "../../context/CartContext";

// Base de datos temporal de productos (después vendrá de una API)
const allProducts = [
  {
    id: 1,
    name: "Zapatillas Velocity Pro",
    category: "Running",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    ],
    sizeType: "calzado",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    description: "Las Zapatillas Velocity Pro están diseñadas para corredores que buscan máximo rendimiento. Con tecnología de amortiguación avanzada y materiales ultraligeros, cada zancada se convierte en una experiencia superior.",
    features: [
      "Suela de goma de alta tracción",
      "Plantilla ergonómica removible",
      "Upper de malla transpirable",
      "Peso: 280g por unidad",
      "Drop: 10mm",
    ],
    reviewsList: [
      { user: "Carlos M.", rating: 5, comment: "Increíbles, las mejores que he tenido para correr maratones." },
      { user: "Ana R.", rating: 4, comment: "Muy cómodas, pero el tallaje corre un poco grande." },
      { user: "Luis P.", rating: 5, comment: "Excelente amortiguación, no me canso en carreras largas." },
    ],
  },
  {
    id: 2,
    name: "Conjunto Training Elite",
    category: "Ropa",
    price: 89.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1539794830467-1f1755804d13?w=800&q=80",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    ],
    sizeType: "ropa",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "El Conjunto Training Elite combina estilo y funcionalidad para tus sesiones más exigentes. Fabricado con tejido técnico Dry-Fit que evacúa la humedad y mantiene tu cuerpo fresco durante todo el entrenamiento.",
    features: [
      "Tejido Dry-Fit 92% poliéster, 8% elastano",
      "Costuras planas anti-rozaduras",
      "Cintura elástica ajustable",
      "Bolsillos laterales con cierre",
      "Resistente al cloro y UV",
    ],
    reviewsList: [
      { user: "María G.", rating: 5, comment: "El tejido es increíble, no se nota el sudor para nada." },
      { user: "Pedro L.", rating: 4, comment: "Buena calidad, los colores son fieles a las fotos." },
    ],
  },
  {
    id: 3,
    name: "Smartwatch Sport X3",
    category: "Tecnología",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
    ],
    sizeType: "unitalla",
    sizes: [],
    description: "El Smartwatch Sport X3 es tu compañero perfecto de entrenamiento. Monitorea tu frecuencia cardíaca, oxígeno en sangre, GPS y más de 100 modos deportivos en un diseño elegante y resistente al agua.",
    features: [
      "Pantalla AMOLED 1.4 pulgadas",
      "GPS integrado de alta precisión",
      "Resistencia al agua 5ATM",
      "Batería 14 días en modo normal",
      "Compatible iOS y Android",
    ],
    reviewsList: [
      { user: "Jorge S.", rating: 5, comment: "El GPS es muy preciso, lo uso en cada carrera." },
      { user: "Laura T.", rating: 5, comment: "La batería dura muchísimo, encantada con la compra." },
      { user: "Andrés V.", rating: 4, comment: "Muy completo, aunque la app podría mejorar." },
    ],
  },
  {
    id: 4,
    name: "Mancuernas Pro Set",
    category: "Gimnasio",
    price: 79.99,
    originalPrice: null,
    rating: 4.7,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
      "https://images.unsplash.com/photo-1517963628607-3a1d7e7ac769?w=800&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    ],
    sizeType: "peso",
    sizes: ["5 kg", "10 kg", "15 kg", "20 kg", "25 kg"],
    description: "El set de Mancuernas Pro está fabricado en hierro fundido con recubrimiento de goma antideslizante. Perfectas para entrenamientos de fuerza en casa o en el gimnasio, con agarre ergonómico para mayor comodidad.",
    features: [
      "Hierro fundido de alta densidad",
      "Recubrimiento de goma antideslizante",
      "Agarre hexagonal antirrodadura",
      "Superficie knurled para mejor agarre",
      "Garantía de 2 años",
    ],
    reviewsList: [
      { user: "Roberto M.", rating: 5, comment: "Muy sólidas, no se nota desgaste después de meses." },
      { user: "Sofía K.", rating: 4, comment: "Buen agarre, pero el envío tardó un poco." },
    ],
  },
  {
    id: 5,
    name: "Mochila Sport 40L",
    category: "Accesorios",
    price: 59.99,
    originalPrice: 74.99,
    rating: 4.5,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
    ],
    sizeType: "unitalla",
    sizes: [],
    description: "La Mochila Sport 40L es ideal para llevar todo tu equipo al gimnasio o en tus aventuras outdoor. Con compartimentos dedicados para ropa húmeda, zapatos y electrónicos, mantiene todo organizado.",
    features: [
      "Capacidad 40 litros",
      "Material impermeable 600D",
      "Compartimento para zapatos ventilado",
      "Puerto USB de carga externa",
      "Espalderas acolchadas ergonómicas",
    ],
    reviewsList: [
      { user: "Diana F.", rating: 5, comment: "Cabe todo lo del gimnasio y más, muy recomendada." },
      { user: "Tomás R.", rating: 4, comment: "Buena calidad, los zipers son resistentes." },
    ],
  },
  {
    id: 6,
    name: "Kit Bandas Elásticas",
    category: "Fitness",
    price: 34.99,
    originalPrice: null,
    rating: 4.4,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    ],
    sizeType: "resistencia",
    sizes: ["Ligera", "Media", "Fuerte", "Extra Fuerte"],
    description: "El Kit de Bandas Elásticas incluye 5 niveles de resistencia para adaptarse a cualquier nivel de entrenamiento. Perfectas para tonificar, rehabilitación o como complemento de tu rutina habitual.",
    features: [
      "Set de 5 bandas de distintas resistencias",
      "Látex natural de alta calidad",
      "Longitud: 200cm cada banda",
      "Incluye bolsa de transporte",
      "Guía de ejercicios incluida",
    ],
    reviewsList: [
      { user: "Carmen L.", rating: 4, comment: "Muy útiles para trabajar en casa, buena calidad." },
      { user: "Marcos B.", rating: 5, comment: "Perfectas para rehabilitación, las recomiendo." },
    ],
  },
  {
    id: 7,
    name: "Camiseta Dry-Fit Pro",
    category: "Ropa",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.3,
    reviews: 77,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80",
    ],
    sizeType: "ropa",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "La Camiseta Dry-Fit Pro está fabricada con tecnología de evaporación rápida que mantiene tu piel seca durante el ejercicio. Su corte ergonómico permite máxima libertad de movimiento.",
    features: [
      "100% poliéster reciclado",
      "Tecnología Dry-Fit",
      "Costuras reforzadas en zonas de tensión",
      "Cuello redondo elástico",
      "Disponible en 8 colores",
    ],
    reviewsList: [
      { user: "Natalia S.", rating: 4, comment: "Muy ligera y cómoda, perfecta para el verano." },
      { user: "Felipe O.", rating: 5, comment: "La mejor camiseta de entrenamiento que he comprado." },
    ],
  },
  {
    id: 8,
    name: "Rodilleras Compresión",
    category: "Accesorios",
    price: 24.99,
    originalPrice: null,
    rating: 4.6,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    ],
    sizeType: "ropa",
    sizes: ["S", "M", "L", "XL"],
    description: "Las Rodilleras de Compresión brindan soporte y estabilidad a la articulación de la rodilla durante actividades de alto impacto. Su tejido elástico de 4 vías se adapta perfectamente a tu anatomía.",
    features: [
      "Compresión graduada 20-30 mmHg",
      "Neopreno de alta calidad",
      "Diseño antideslizante interior",
      "Abertura rotuliana para mayor movilidad",
      "Lavable a máquina",
    ],
    reviewsList: [
      { user: "Gabriela M.", rating: 5, comment: "Me ayudaron mucho en mi recuperación, muy recomendadas." },
      { user: "Hector P.", rating: 4, comment: "Buen soporte, aunque en tallas grandes quedan un poco flojas." },
    ],
  },
  {
    id: 9,
    name: "Auriculares Sport BT",
    category: "Tecnología",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
    ],
    sizeType: "unitalla",
    sizes: [],
    description: "Los Auriculares Sport BT ofrecen sonido premium con cancelación de ruido activa para que nada interrumpa tu entrenamiento. Su diseño seguro para oreja y resistencia al agua IPX5 los hace perfectos para cualquier actividad.",
    features: [
      "Bluetooth 5.2 de baja latencia",
      "Cancelación activa de ruido (ANC)",
      "Resistencia al agua IPX5",
      "Batería 8h + 24h con estuche",
      "Carga rápida: 10min = 2h de música",
    ],
    reviewsList: [
      { user: "Valentina C.", rating: 5, comment: "El sonido es brutal, no se caen ni corriendo." },
      { user: "Ignacio D.", rating: 4, comment: "Muy buena cancelación de ruido, los uso a diario." },
      { user: "Paula M.", rating: 5, comment: "La batería dura mucho, no los cambiaría por nada." },
    ],
  },
];

const ProductController = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("descripcion");
  const { addToCart } = useCart();

  if (!product) {
    return (
      <MainLayout cartItems={0}>
        <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">Producto no encontrado</p>
            <button
              onClick={() => navigate("/tienda")}
              className="bg-[#24DB67] text-black font-bold px-6 py-3 rounded-lg"
            >
              Volver a la tienda
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    console.log(`Agregado: ${product.name} - Talla: ${selectedSize}`);
  };

  return (
    <MainLayout cartItems={0}>
      <ProductView
        product={product}
        selectedSize={selectedSize}
        selectedImage={selectedImage}
        activeTab={activeTab}
        onSizeSelect={setSelectedSize}
        onImageSelect={setSelectedImage}
        onTabChange={setActiveTab}
        onAddToCart={handleAddToCart}
        onBack={() => navigate(-1)}
      />
    </MainLayout>
  );
};

export default ProductController;