import React from "react";
import ShoesModal from "./ShoesModal";
import { Button } from "antd";
function ProductItem({ product, onAdd }) {
  const handleAddToCart = (product) => {
    onAdd(product);
  };
  return (
    <div className="item">
      <div className="row">
        <img src={product.image} alt={product.alias} width="200px" />
        <h4>{product.name}</h4>
        <p>{product.price} $</p>
        <div className="footer-btn">
          <ShoesModal product={product} />
          <Button type="danger" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
