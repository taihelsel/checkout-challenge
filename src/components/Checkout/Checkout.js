import React, { Component } from "react";
import "./Checkout.css";
/*Components*/
import NavBar from "../NavBar/NavBar";
import GenericFormInput from "../GenericFormInput/GenericFormInput";
class Checkout extends Component {
    state = {
        /*payment*/
        nameOnCard: "",
        /*shipping*/
        name: "",
        address: "",
        apt: "",
        city: "",
        zipCode: "",
    }
    handleGenericInputChange = target => e => {
        const _state = { ...this.state };
        _state[target] = e.currentTarget.value;
        this.setState(_state);
    }
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
                            <GenericFormInput
                                label={"Name on Card"}
                                onChange={this.handleGenericInputChange("nameOnCard")}
                                value={this.state.nameOnCard}
                                placeholder={"Name on Card"}
                            />
                        </div>
                        <div className="checkout-shipping-wrapper">
                            <h1>Shipping Address</h1>
                            <GenericFormInput
                                label={"Name"}
                                onChange={this.handleGenericInputChange("name")}
                                value={this.state.name}
                                placeholder={"Full name"}
                            />
                            <GenericFormInput
                                label={"Address"}
                                onChange={this.handleGenericInputChange("address")}
                                value={this.state.address}
                                placeholder={"Address"}
                            />
                            <GenericFormInput
                                label={"Apt/suite/etc"}
                                onChange={this.handleGenericInputChange("apt")}
                                value={this.state.apt}
                                placeholder={"Apt/suite/etc"}
                            />
                            <GenericFormInput
                                label={"City"}
                                onChange={this.handleGenericInputChange("city")}
                                value={this.state.city}
                                placeholder={"City"}
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Checkout;