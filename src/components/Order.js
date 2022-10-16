import React from 'react'
import "../css/orders.css"
import moment from "moment";
import CartProduct from "./CartProduct";
import { numberWithCommas } from '../services/common_service';

function Order({ order }) {
    console.log(order);

    function numberWithCommas(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }

    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CartProduct
                    thruPayment={true}
                    id={item.id}
                    desc={item.title}
                    productImg={item.image}
                    price={item.price}
                    rating={item.rating}
                    qty={item.qty}
                    hideButton
                />
            ))}
            <h3 className="order__total">Order Total: ${numberWithCommas(order.data.amount) }</h3>
            {/* <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />    */}
        </div>
    )
}

export default Order