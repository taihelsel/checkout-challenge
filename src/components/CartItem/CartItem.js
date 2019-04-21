import React from "react";
import "./CartItem.css";
const hasValidData = (sku, unitPrice, name, quantity) => {
    return typeof sku !== "undefined" && typeof unitPrice !== "undefined" && typeof name !== "undefined" && typeof quantity !== "undefined";
}
const CartItem = ({ itemData }) => {
    const { sku, unitPrice, name, quantity } = itemData;
    if (hasValidData(sku, unitPrice, name, quantity) === false) throw "CartItem.js: itemData object missing required field";

    return (
        <div className="cart-item">
            <div className="cart-item-img" />
            <div className="cart-item-info">
                <div className="cart-item-title">
                    {name}
                </div>
                <div className="cart-item-sku">
                    SKU# {sku}
                </div>
            </div>
            <div className="cart-item-qty">{quantity}</div>
            <div className="cart-item-price">${unitPrice}</div>
        </div>
    );
}

export default CartItem;