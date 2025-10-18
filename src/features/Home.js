import React from "react";
import Product from "./product/Product";

export default function Home({ products }) {
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
    </div>
  );
}
