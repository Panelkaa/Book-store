import React, { PureComponent } from "react";
import "../styles.css";

import { connect } from 'react-redux';
import { removeGoodFromCart } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  removeGoodFromCart: (id) => dispatch(removeGoodFromCart(id))
})

class CartItem extends PureComponent {
  render() {
    const { id, title, price } = this.props;
    return (
      <div className="cart-item" key={id}>
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00 руб.</p>
        <button onClick={() => {this.props.removeGoodFromCart(id)}}> X </button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CartItem);