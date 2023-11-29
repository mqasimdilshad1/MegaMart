import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Result from "./Components/Result";
import { CartProvider } from "./Components/CartContext";
import "./styles.css";

function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CartProvider>
      <>
        <Header />
        <Result productData={productData} />
      </>
    </CartProvider>
  );
}

export default App;
