import React, { PureComponent } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    goods: state.goods
  }
}
class Goods extends PureComponent {

  state = {
    name: "",
    upPrice: [],
    asset: true
  }

  searchName = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  } 

  upPrice = () => {
    const sortBooks = [];
    this.props.goods.forEach(element => {
        const prices = element
        sortBooks.push(prices)
        
    });
    if(this.state.asset == true) {
      this.setState({
        asset: false
      })
      sortBooks.sort(
        (a, b) => {return a.price < b.price ? 1 : -1}
      )
    }else {
      this.setState({
        asset: true
      })
      sortBooks.sort(
        (a, b) => {return a.price > b.price ? 1 : -1}
      )
    }
    

    this.setState({
      upPrice: sortBooks
    })
    
  }

 
  

  render() {
    console.log(this.state.upPrice)
    return (
      <div className="goods">
        <h2 className="goods__title">Магазин книг</h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Название книги" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.searchName}/>        
        </div>
        <button type="button" className="btn btn-outline-dark sort" onClick={this.upPrice}>Cортировать по цене &#8593;&#8595;</button>


      {this.props.goods  
           && (this.state.upPrice == "" ? this.props.goods.filter((item) =>
           this.state.name ? item.title.toLowerCase().includes(this.state.name.toLowerCase()) : "0"       
         ) : this.state.upPrice) 
          .map(item => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Goods);