import React from 'react'
import './item.css';
import { connect } from 'react-redux';
import {CartActions} from "../../_actions/cart.action"
import Item from './item';
import Nav from './nav'

function Cart(props) {
    const { products } = props;
    const totalPrice = (products) => {
        let total = 0 
        products.forEach(product =>{
            total = total + (product.price * product.qty)
        })
        return total
    }

    const handlePlaceOrder = () => {
       return props.placeOrder(products);
    }

    return (
        <div>
            <Nav />
            <div className="row m-4">
                {products.map((item) => (
                    <Item addProduct={props.addProduct} removeProduct={props.removeProduct} products={products} item={item} />
                ))}
            </div>
            <div class="card-footer text-center d-flex justify-content-between">
                <h4 className="font-weight-bold ">Total:  {totalPrice(products)} Rs.</h4>
                <button type="button" class="btn btn-info font-weight-bolder" onClick={handlePlaceOrder}>Place Order</button>            </div>
       </div>
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
        removeProduct: (product) => dispatch(CartActions.removeProduct(product)),
        placeOrder:  (products) => dispatch(CartActions.placeOrder(products))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);