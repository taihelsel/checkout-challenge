import React, { Component } from "react";
import "./Cart.css";
/*Components*/
import NavBar from "../NavBar/NavBar";
import CartItem from "../CartItem/CartItem";
class Cart extends Component {
    state = {
        cart: [
            { sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 },
            { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 },
            { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }
        ],
        cartTotal: 0,
    }
    buildCart = cart => {
        let cartTotal = 0;
        const cartItems = cart.map((item, i) => {
            cartTotal += (item.quantity * item.unitPrice);
            return <CartItem itemData={item} key={`${item.sku}-${item.quantity}-${i}`} />
        });
        return { cartTotal, cartItems };
    };
    render() {
        const { cart } = this.state;
        const { cartTotal, cartItems } = this.buildCart(cart);
        return (
            <section id="Cart">
                <NavBar />
                <div className="cart-body">
                    <div className="cart-labels">
                        <h1>Your Cart</h1>
                        <h3>QUANTITY</h3>
                        <h3>PRICE</h3>
                    </div>
                    <div className="cart-items-wrapper">
                        {cartItems}
                    </div>
                </div>
                <div className="cart-footer">
                    <h3>SUBTOTAL</h3>
                    <h2>${cartTotal.toFixed(2)}</h2>
                </div>
            </section>
        )
    }
}

export default Cart;