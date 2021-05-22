import React from 'react'
import Navigation from "../Dashboard/nav"
import { connect } from 'react-redux';
import OrderActions from "../../_actions/order.actions"
import { useEffect } from 'react'
import OrderItem from "./OrderItem"

function Orders(props) {
    useEffect(() =>{
        props.getOrder()
    },[])
    const {item, orders } = props;
    console.log(`products`, orders)

    return (
        <div>
            <Navigation/>
            <OrderItem  className=" m-4" orders={orders} items={item}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        orders: state.OrderReducer.orders
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getOrder: (product) => dispatch(OrderActions.getOrders(product))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Orders)