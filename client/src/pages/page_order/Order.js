import React, { useState } from "react";
import { useCartItems } from "../../store/CartContext";
import "./Order.css";
import OrderSummary from "./OrderSummary";

const OrderPage = () => {
   const { cartItems, totalPrice } = useCartItems();
   const [customerInfo, setCustomerInfo] = useState({
      name: "",
      email: "",
      address: "",
   });

   const handleInputChange = (event) => {
      const { name, value } = event.target;
      setCustomerInfo((prevInfo) => ({
         ...prevInfo,
         [name]: value,
      }));
   };

   const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
   };

   const placeOrder = () => {
      if (
         !customerInfo.name ||
         !validateEmail(customerInfo.email) ||
         !customerInfo.address ||
         cartItems.length === 0
      ) {
         console.warn(
            "Please fill in all the required fields before placing an order."
         );
         return;
      }
      console.log("Placing order:", customerInfo, cartItems);
      setCustomerInfo({
         name: "",
         email: "",
         address: "",
      });

      return <div>tttttttttt</div>;
   };

   return (
      <div className="order-page">
         <h1>Place Your Order</h1>
         <div className="order-summary">
            <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
         </div>
         <div className="customer-info">
            <h2>Customer Information</h2>
            <form>
               <label>
                  Name:
                  <input
                     type="text"
                     name="name"
                     value={customerInfo.name}
                     onChange={handleInputChange}
                  />
               </label>
               <label>
                  Email:
                  <input
                     type="email"
                     name="email"
                     value={customerInfo.email}
                     onChange={handleInputChange}
                  />
               </label>
               <label>
                  Address:
                  <textarea
                     name="address"
                     value={customerInfo.address}
                     onChange={handleInputChange}
                  />
               </label>
               <button type="button" onClick={placeOrder}>
                  Place Order
               </button>
            </form>
         </div>
      </div>
   );
};

export default OrderPage;
