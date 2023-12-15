import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Result from "./Components/Result";
import { CartProvider } from "./Components/CartContext";
import "./styles.css";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // search filtraion and category wise filtration in this use effect
  useEffect(() => {
    let filteredProducts;

    if (selectedCategory === "All") {
      filteredProducts = productsData.filter((product) =>
        product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    } else {
      filteredProducts = productsData.filter(
        (product) =>
          product.category === selectedCategory &&
          product.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    setFilteredData(filteredProducts);
  }, [selectedCategory, searchItem, productsData]);

  return (
    // cart provider component to pass our id's from card component , local storage to header component
    <CartProvider>
      <div className="m-0 p-0 bg-body-background mx-auto box-border font-Inter h-[100vh]">
        <Header
          setSearchItem={setSearchItem}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <Result
          productsData={filteredData}
          selectedCategory={selectedCategory}
        />
      </div>
    </CartProvider>
  );
}

export default App;
