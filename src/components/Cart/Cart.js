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
        ]
    }
    renderCartItems = cart => (cart.map((item, i) => (<CartItem itemData={item} key={`${item.sku}-${item.quantity}-${i}`} />)));

    render() {
        const { cart } = this.state;
        return (
            <section id="Cart">
                <NavBar />
                {this.renderCartItems(cart)}
            </section>
        )
    }
}

export default Cart;