import cartConstants from '../_constants/cart.constants';
import axios from "axios";

export const CartActions = {
    addProduct , removeProduct , placeOrder
}

function addProduct (product) {
    return{
        type: cartConstants.ADD_PRODUCT,
        payload: product
    }
}

function removeProduct (product) {
    return{
        type: cartConstants.REMOVE_PRODUCT,
        payload: product
    }
}
function placeOrder  (products) {

    const placeOrderRequest = () => {
        return {type: cartConstants.PLACE_ORDER_REQUEST}
    }
    const placeOrderSuccess =  (data) => {
        return {
          type: cartConstants.PLACE_ORDER_SUCCESS,
          payload: {
            itemName: data._id,
            price: data.title,
            qty: data.body
          }
        }
      };
      const placeOrderFailure = (data) => {
          return {
              type: cartConstants.PLACE_ORDER_FAILURE
          }
      }
    return (dispatch) => {
        dispatch(placeOrderRequest())
        axios.post(`http://192.168.2.204:9000/login_service/place_order`,products)
        .then(response =>{
            dispatch(placeOrderSuccess(response.data))
         }).catch(error =>{
            dispatch(placeOrderFailure());
        })
    }
 }


