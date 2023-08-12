import React, { useRef, useState } from "react";

import "./AddMovieAmountForm.css";
const AddMovieAmountForm = (props) => {
   const [amountIsValid, setAmountIsValid] = useState(true);
   const amountInputRef = useRef();

   const submitHandler = (event) => {
      event.preventDefault();

      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (
         enteredAmount.trim().length === 0 ||
         enteredAmountNumber < 1 ||
         enteredAmountNumber > 5
      ) {
         setAmountIsValid(false);
         return;
      }

      props.onAddToCart(enteredAmountNumber);
   };

   return (
      <form className="form" onSubmit={submitHandler}>
         <div className="input">
            <label htmlFor={props.id}>Amount</label>
            <input
               type="number"
               min="1"
               max="5"
               step="1"
               defaultValue="1"
               id={props.id}
               ref={amountInputRef}
            />
         </div>
         <button>+ Add</button>
         {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
   );
};

export default AddMovieAmountForm;
