import OrderConstants from '../_constants/order.constants';
import axios from "axios";

const OrderActions = {
    getOrders
}

export default OrderActions

function getOrders () {
    const getOrderRequest = () => {
        return {type: OrderConstants.GET_ORDER_REQUEST}
    }
    const getOrderSuccess = (data) => {
        return {
            type: OrderConstants.GET_ORDER_SUCCESS,
            payload: data
        }
    };
    const getOrderFailure = (data) => {
        return {
            type: OrderConstants.GET_ORDER_FAILURE
        }
    }
    return (dispatch) => {
        dispatch(getOrderRequest())
        axios.get(`http://192.168.2.204:9000/login_service/get_orders`)
        .then(response =>{
            dispatch(getOrderSuccess(response.data))
         }).catch(error =>{
            dispatch(getOrderFailure(error.data));
        })
    }
 }

