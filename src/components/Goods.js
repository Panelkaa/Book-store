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
    prices: [],
  }

  searchName = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  } 

  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Магазин книг</h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Название книги" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.searchName}/>        
        </div>

      {this.props.goods
          .filter((item) =>
            this.state.name ? item.title.toLowerCase().includes(this.state.name.toLowerCase()) : "0"           
          ).map(item => (
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