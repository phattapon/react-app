import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./features/Navbar";
import Container from "./features/Container";
import Home from "./features/Home";
import AddForm from "./features/product/AddForm";
import GlobalStyle from "./features/GlobalStyle";
import data from "./app/data"; 
import "./app.css";


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data); // โหลดข้อมูลจากไฟล์ data.js
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route
              path="/create-product"
              element={<AddForm addProduct={() => {}} />}
            />
          </Routes>
        ) : (
          <div>Loading products...</div>
        )}
      </Container>
    </>
  );
}

export default App;
