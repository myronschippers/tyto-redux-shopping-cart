import React, { Component } from 'react';

import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ProductForm extends Component {
    // You will need to keep this state in this component
    // if you're only using something in one component,
    // you do not need to move it to redux
    state = {
        productToAdd: {name: '', price: 0}
    }

    handlePriceChange = (event) => {
        this.setState({
            productToAdd: {
                ...this.state.productToAdd,
                price: event.target.value
            },
        });
    }

    handleNameChange = (event) => {
        this.setState({
            productToAdd: {
                ...this.state.productToAdd,
                name: event.target.value
            },
        });
    }

    addProduct = (event) => {
        event.preventDefault();
        // TODO: Dispatch here
        this.props.dispatch({
            type: 'ADD_NEW_PRODUCT',
            payload: this.state.productToAdd
        });
        // this.props.addNewProduct(this.state.productToAdd);
    }

    render() {
        return (
            <form onSubmit={this.addProduct}>
                <input onChange={this.handleNameChange} type="text" placeholder="name" />
                <input onChange={this.handlePriceChange} type="text" placeholder="price" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default connect(mapStoreToProps)(ProductForm);