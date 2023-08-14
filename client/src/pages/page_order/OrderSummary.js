// OrderSummary.js
import React from "react";
import "./OrderSummary.css";

const OrderSummary = ({ cartItems, totalPrice }) => {
   const totalQuantity = cartItems.reduce(
      (total, item) => total + item.amount,
      0
   );

   return (
      <div className="order-summary">
         <h2>Order Summary</h2>
         <ul>
            {cartItems.map((item) => (
               <li key={item.id}>
                  {item.name} - Quantity: {item.amount}
               </li>
            ))}
         </ul>
         <p className="total-quantity">
            <span className="total-label">Total Quantity:</span> {totalQuantity}
         </p>
         <p className="total-price">
            <span className="total-label">Total Price:</span> $
            {totalPrice.toFixed(2)}
         </p>
      </div>
   );
};

export default OrderSummary;
