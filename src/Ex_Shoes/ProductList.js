import React from "react";
import ProductItem from "./ProductItem";
function ProductList({ products, onAdd }) {
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}

export default ProductList;
