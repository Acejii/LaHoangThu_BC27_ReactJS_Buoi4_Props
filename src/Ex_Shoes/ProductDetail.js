import React from "react";

function ProductDetail({ product }) {
  return (
    <>
      <div className="product-img">
        <img src={product.image} alt={product.alias} width="100px" />
      </div>
      <table width="100%">
        <tbody>
          <tr>
            <td width="20%">Name:</td>
            <td width="80%">{product.name}</td>
          </tr>
          <tr>
            <td>Alias:</td>
            <td>{product.alias}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>{product.price} $</td>
          </tr>
          <tr>
            <td>Quantity:</td>
            <td>{product.quantity}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{product.shortDescription}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ProductDetail;
