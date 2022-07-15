import React from "react";
import { Button } from "antd";
function ProductCart({ carts, onDelete, onChangeQuantity }) {
  const handleDeleteProduct = (product) => {
    onDelete(product);
  };

  const handleChangeQuantity = (product, value) => {
    onChangeQuantity(product, value);
  };
  return (
    <>
      <table width="100%">
        <thead style={{ textAlign: "left" }}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th width="50px">Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {carts.map((product) => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.alias} width="100px" />
              </td>
              <td>{product.name}</td>
              <td>
                <Button
                  disabled={product.productQuantity === 1}
                  type="secondary"
                  size="small"
                  onClick={() => handleChangeQuantity(product, -1)}
                >
                  -
                </Button>{" "}
                {product.productQuantity}{" "}
                <Button
                  type="secondary"
                  size="small"
                  onClick={() => handleChangeQuantity(product, 1)}
                >
                  +
                </Button>
              </td>
              <td>{product.price} $</td>
              <td>{product.productQuantity * product.price} $</td>
              <td>
                <Button
                  type="danger"
                  onClick={() => handleDeleteProduct(product)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductCart;
