import React, { Component } from "react";
import "./Checkout.css";
/*Components*/
import NavBar from "../NavBar/NavBar";
import GenericFormInput from "../GenericFormInput/GenericFormInput";
class Checkout extends Component {
    render() {
        return (
            <section id="Checkout">
                <NavBar />
                <div className="checkout-body">
                    <div className="checkout-labels">
                        <h1>Check Out</h1>
                    </div>
                    <div className="checkout-items-wrapper">
                        <div className="checkout-info-wrapper">
                            <h1>Payment Information</h1>
                            <div className="checkout-info-body">
                                <GenericFormInput />
                            </div>
                        </div>
                        <div className="checkout-shipping-wrapper">
                            <h1>Shipping Address</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Checkout;