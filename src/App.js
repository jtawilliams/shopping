import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader';
import CartFooter from './components/CartFooter';
import CartItems from './components/CartItems';
import AddItem from './components/AddItem';

class App extends Component {

  constructor() {
    super();
    const products = [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ];

    this.state = {
      copyRightYear: 2018,
      quantity: 0,
      cart: [],
      selectedProduct: null,
      name: "",
      products: products,
      price: 0,
      totalPrice: 0
    };
  }

  grabThis = e => {
    const array = this.state.products.filter(item => item.name === e);
     this.setState({
       selectedProduct: array[0],
       price: (this.state.price += array[0].priceInCents)
     });
   };

  changeQuantity = e => {
    this.setState({
    quantity: e
    });
  };

  SubmitItems = e => {
    e.preventDefault();
    const newObj = {
    quantity: this.state.quantity,
    ...this.state.selectedProduct
    };
    this.setState({
      cart: [...this.state.cart,newObj],
      totalPrice:
        this.state.totalPrice +
        this.state.quantity * this.state.selectedProduct.priceInCents
    });
 };

  render() {
    return (
        <div>
          <CartHeader />
          <CartItems products = {this.state.products} cart = {this.state.cart} quantity = {this.state.quantity}/>
          <AddItem products = {this.state.products} changeQuantity = {this.changeQuantity} grabThis = {this.grabThis} submit = {this.SubmitItems} total = {this.state.totalPrice} />
          <CartFooter year = {this.state.copyRightYear} />
        </div>
    );
  }
}

export default App;
