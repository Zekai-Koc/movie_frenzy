import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CartItem from "./CartItem";
import { useCartItems } from "../../store/CartContext";

// Mock the context module
jest.mock("../../store/CartContext");

describe("TEST-1: check if test file configured correctly.", () => {
   it("true is truthy", () => {
      expect(true).toBe(true);
   });

   it("false is falsy", () => {
      expect(false).toBe(false);
   });
});

describe("TEST-2: CartItem", () => {
   const mockCartItem = {
      id: 1,
      name: "Test Item",
      price: 10.0,
      amount: 2,
   };

   it("should render the item name, price, and amount", () => {
      useCartItems.mockReturnValue({
         cartItems: [],
         addCartItem: jest.fn(),
         removeCartItem: jest.fn(),
      });

      render(<CartItem {...mockCartItem} />);

      const itemName = screen.getByText("Test Item");
      const itemPrice = screen.getByText("$10.00");
      const itemAmount = screen.getByText("x 2");

      expect(itemName).toBeInTheDocument();
      expect(itemPrice).toBeInTheDocument();
      expect(itemAmount).toBeInTheDocument();
   });

   it("should call removeCartItem when minus button is clicked", () => {
      const mockRemoveCartItem = jest.fn();

      useCartItems.mockReturnValue({
         cartItems: [],
         addCartItem: jest.fn(),
         removeCartItem: mockRemoveCartItem,
      });

      render(<CartItem {...mockCartItem} />);

      const minusButton = screen.getByText("−");
      fireEvent.click(minusButton);

      expect(mockRemoveCartItem).toHaveBeenCalledWith(mockCartItem);
   });

   it("should call addCartItem when plus button is clicked", () => {
      const mockAddCartItem = jest.fn();

      useCartItems.mockReturnValue({
         cartItems: [],
         addCartItem: mockAddCartItem,
         removeCartItem: jest.fn(),
      });

      render(<CartItem {...mockCartItem} />);

      const plusButton = screen.getByText("+");
      fireEvent.click(plusButton);

      expect(mockAddCartItem).toHaveBeenCalledWith(mockCartItem);
   });
});
