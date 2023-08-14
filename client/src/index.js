//
// https://64d7a7019f1f931154d74762--moviefrenzy.netlify.app/
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
