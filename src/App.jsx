import { useState } from "react";
import "./App.css";
import { Products } from "./components/Products";
import { products as InitalProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/cart";

function App() {
  const [products] = useState(InitalProducts);
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
