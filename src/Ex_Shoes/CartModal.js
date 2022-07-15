import { Button, Modal } from "antd";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ProductCart from "./ProductCart";

const CartModal = ({ carts, onDelete, onChangeQuantity }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
        Cart
      </Button>
      <Modal
        width="800px"
        style={{ top: "auto" }}
        title="Carts"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProductCart
          carts={carts}
          onDelete={onDelete}
          onChangeQuantity={onChangeQuantity}
        />
      </Modal>
    </>
  );
};

export default CartModal;
