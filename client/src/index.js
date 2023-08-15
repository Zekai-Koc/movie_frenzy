//
// https://64db327de4f0ac382d2cd63a--moviefrenzy.netlify.app/
//

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FavoritesProvider } from "./store/FavoritesContext";
import { CartItemsProvider } from "./store/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <CartItemsProvider>
      <FavoritesProvider>
         <App />
      </FavoritesProvider>
   </CartItemsProvider>
);
