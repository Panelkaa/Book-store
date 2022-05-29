import React, { PureComponent } from "react";
import "../styles.css";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    cartGoods: state.cart
  }
}
class Header extends PureComponent {

    state = {
      summa: 10000,
    }


    getPrice() {
      const { cartGoods } = this.props;
      return cartGoods.reduce((acc, item) => acc + item.price, 0);
    }

  render() {
    const { price, id } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
              <Link to="/order"><Nav.Link href="/order">Order</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
          <h4 key={id}>Баланс: {this.state.summa - this.getPrice()}руб. </h4>
        </Container>
      </Navbar>
    );
  }
}

export default connect(mapStateToProps)(Header);