import React, { PureComponent } from "react";
import "../styles.css";

import { connect } from 'react-redux';
import { addGoodsToCart } from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  addGoodsToCart: (id) => dispatch(addGoodsToCart(id))
})
class GoodsItem extends PureComponent {
  state = {
    books: []
  }

  // componentDidMount () {
  //   fetch("http://45.8.249.57/bookstore-api/books")
  //     .then(res => res.json)
  //     .then(data => {
  //       const arrData = data
  //       console.log(arrData)
  //       this.setState({
  //         books: arrData
  //       })
  //       store.dispatch({
  //         type: "ADD_BOOKS",
  //         payload: {
  //           books: arrCoins
  //       }     
  //       })

  //     })
  // }
  render() {
    const { title, authorName, price, id, image } = this.props;

    return (
      <div className="goods-item" key={id}>
        <img width={200} height={300} src={image}/>
        <h3 className="goods-item__title">{title}</h3>
        <p className="goods-item__description">{authorName}</p>
        <p className="goods-item__price">
          <span className="goods-item__price-value goods-item__price-value_new">{price}.00 руб.</span>
        </p>
        <button onClick={() => {this.props.addGoodsToCart(id)}} className="goods-item__add-to-card">Add to cart</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(GoodsItem);