import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './product/Product';
import AddForm from './product/AddForm';

export default function Home() {
  const [products, setProducts] = useState([]);
  const endpoint = 'https://68e9ff30f1eeb3f856e5b6bf.mockapi.io/products';

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const res = await axios.get(endpoint);
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  async function addProduct(product) {
    try {
      await axios.post(endpoint, product);
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }

  return (
    <div className="Home">
      <h1 className="Home__title">New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products...</div>
      )}
      <AddForm addProduct={addProduct} />
    </div>
  );
}
