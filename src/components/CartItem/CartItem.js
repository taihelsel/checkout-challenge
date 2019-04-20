import React from "react";

const hasValidData = (sku, unitPrice, name, quantity) => {
    return typeof sku !== "undefined" && typeof unitPrice !== "undefined" && typeof name !== "undefined" && typeof quantity !== "undefined";
}
const CartItem = ({ itemData }) => {
    const { sku, unitPrice, name, quantity } = itemData;
    if (hasValidData(sku, unitPrice, name, quantity) === false) throw "CartItem.js: itemData object missing required field";
    
    return (
        <div>
            {JSON.stringify(itemData)}
        </div>
    );
}

export default CartItem;