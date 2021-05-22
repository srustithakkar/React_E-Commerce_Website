import React from 'react';
import { Card , Button, Container} from 'react-bootstrap';
import {find, isEmpty} from "lodash";

function OrderItem(props) {
    const {orders} = props ;

    return (
        <div className="row text-center m-auto align-center "style={{width: "85%"}}>
            {orders.map((item) => (
                <div class="col-2  card text-white bg-info m-2 p-0" style={{maxWidth: "180px"}} >
                    <div class="card-header font-weight-bold">{item.itemName}</div>
                    <div class="card-body font-weight-bold">
                    <h5 class="card-title">Price: {item.price} Rs.</h5>
                    <p class="card-text">Qty: {item.qty}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OrderItem;

// {products.map((item) => (
//     <ItemWrapper item={item}/>
// ))}