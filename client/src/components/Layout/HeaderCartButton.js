import React, { useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import { useCartItems } from "../../store/CartContext";

const HeaderCartButton = (props) => {
   const { cartItems } = useCartItems();

   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

   const numberOfCartItems = cartItems.length;

   const btnClasses = `button ${btnIsHighlighted ? "bump" : ""}`;

   useEffect(() => {
      if (cartItems.length === 0) {
         return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
         setBtnIsHighlighted(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [cartItems]);

   return (
      <button className={btnClasses} onClick={props.onClick}>
         <span className="icon">
            <CartIcon />
         </span>
         <span>Movie Cart</span>
         <span className="badge">{numberOfCartItems}</span>
      </button>
   );
};

export default HeaderCartButton;
