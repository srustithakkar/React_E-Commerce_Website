import React from 'react';
import { Card , Button, Container, Row, Col} from 'react-bootstrap';
import {CartActions} from "../../_actions/cart.action"
import {connect} from "react-redux";
import {find, isEmpty} from "lodash";
import Item from "./item"

function ItemWrapper(props) {
    const {item, products } = props;
   
    return (
        <Item addProduct={props.addProduct} removeProduct={props.removeProduct} products={products} item={item} />
    )
}

const mapStateToProps = (state) => {
    const products = state.CartReducer.products
    return {
        products,
        rerender: state.CartReducer.rerender
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addProduct: (product) => dispatch(CartActions.addProduct(product)),
        removeProduct: (product) => dispatch(CartActions.removeProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemWrapper);
