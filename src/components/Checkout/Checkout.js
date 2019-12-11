import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({
            type: 'CLEAR_CART'
        })

    }

    render() {
        const checkoutProducts = this.props.store.checkoutReducer.map((item, index) => {
            return <li key={index}>{item.name} : ${item.price}</li>
        });
    
        return (
            <div>
                <h2>Checkout</h2>
                {/* TODO: Display items in the cart */}
                <ul>
                    {checkoutProducts}
                </ul>

                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Checkout);