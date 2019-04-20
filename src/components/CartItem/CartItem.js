import React from "react";

const CartItem = ({ itemData }) => {
    return (
        <div>
            {JSON.stringify(itemData)}
        </div>
    );
}

export default CartItem;