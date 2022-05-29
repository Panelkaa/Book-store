import React from 'react';
import Goods from './Goods';
import Cart from './Cart';

class Main extends React.Component {
    render() {
        return (
            <>
                <div className="app__goods">
                    <Goods />
                </div>
                <div className="app__cart">
                    <Cart />
                </div>
            </>
        );
    }
}

export default Main;