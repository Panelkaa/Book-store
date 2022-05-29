import React from 'react';
import {connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import CartItem from './CartItem';

import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

const mapStateToProps = (state) => {
    return {
      cartGoods: state.cart
    }
  }

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            address: ''
        }
    }

    submit = () => {
        alert("Заказ оформлен")
    }

    render () {
        return (
            <>
                <ul className="cart__list">
                {this.props.cartGoods.map((item, index) => (
                <li className="cart__list-item" key={index}>
                    <CartItem {...item} />
                </li>
                ))}
                </ul>
                <Form>
                    <fieldset>
                        <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledTextInput"> Адрес</Form.Label>
                        <Form.Control id="disabledTextInput" placeholder="Тверская, 6 ст2" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Label htmlFor="disabledSelect"> Способ доставки</Form.Label>
                        <Form.Select id="disabledSelect">
                            <option>Курьерская доставка</option>
                            <option>Доставка Почтой России</option>
                            <option>Почтомат</option>
                        </Form.Select>
                        </Form.Group>
                        <Button type="submit" onClick={this.submit}>Submit</Button>
                    </fieldset>
                </Form>
            </>
        );
    }
}

export default connect(mapStateToProps)(Order);