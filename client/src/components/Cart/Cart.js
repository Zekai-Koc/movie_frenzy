import React from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import "./Cart.css";
import { useCartItems } from "../../store/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
   const { cartItems, totalPrice } = useCartItems();
   const navigate = useNavigate();

   const hasItems = cartItems.length > 0;

   const cartItemsToDisplay = (
      <ul className="cart-items">
         {cartItems.map((item) => (
            <CartItem
               key={item.id}
               id={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onAdd={props.onAdd}
               onRemove={props.onRemove}
            />
         ))}
      </ul>
   );

   const handleOrder = () => {
      navigate("/order");
   };

   return (
      <Modal onClose={props.onClose}>
         {cartItemsToDisplay}
         <div className="total">
            <span>Total Price</span>
            <span>{totalPrice ? "$" + totalPrice.toFixed(2) : "$0.00"}</span>
         </div>
         <div className="actions">
            <button className="button--alt" onClick={props.onClose}>
               Close
            </button>
            {hasItems && (
               <button className="button" onClick={handleOrder}>
                  Order
               </button>
            )}
         </div>
      </Modal>
   );
};

export default Cart;
