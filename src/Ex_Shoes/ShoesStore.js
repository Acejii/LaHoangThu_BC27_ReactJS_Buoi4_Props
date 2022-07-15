import React, { Component } from "react";
import "./ShoesStore.scss";
import data from "./data.json";
import ProductList from "./ProductList";
import CartModal from "./CartModal";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      carts: [],
    };
  }

  handleAddToCart = (product) => {
    const index = this.state.carts.findIndex((cart) => cart.id === product.id);
    if (index !== -1) {
      return;
    }
    this.setState({
      carts: [...this.state.carts, { ...product, productQuantity: 1 }],
    });
  };

  handleDeleteProductFromCarts = (product) => {
    const carts = this.state.carts.filter((cart) => cart.id !== product.id);
    this.setState({ carts });
  };

  handleChangeProductQuantity = (product, value) => {
    const carts = this.state.carts.map((item) => {
      if (item.id === product.id) {
        return { ...item, productQuantity: item.productQuantity + value };
      }
      return item;
    });
    this.setState({ carts });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <h1>Shoes Store</h1>
        </div>
        <div className="cart">
          <CartModal
            carts={this.state.carts}
            onDelete={this.handleDeleteProductFromCarts}
            onChangeQuantity={this.handleChangeProductQuantity}
          />
        </div>
        <ProductList products={data} onAdd={this.handleAddToCart} />
      </div>
    );
  }
}

export default ShoesStore;
