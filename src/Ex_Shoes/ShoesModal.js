import { Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import ProductDetail from "./ProductDetail";

const ShoesModal = ({ product }) => {
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
        Details
      </Button>
      <Modal
        title="Product Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ProductDetail product={product} />
      </Modal>
    </>
  );
};

export default ShoesModal;
