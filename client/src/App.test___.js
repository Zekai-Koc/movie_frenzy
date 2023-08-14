import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

describe("TEST-1: check if the test file configured correctly.", () => {
   it("true is truthy", () => {
      expect(true).toBe(true);
   });

   it("false is falsy", () => {
      expect(false).toBe(false);
   });
});

describe("TEST-2: plain render", () => {
   it("renders Movies component simple render", () => {
      render(<App />);
   });
});

test("renders App component", () => {
   const { getByText } = render(
      <BrowserRouter>
         <App />
      </BrowserRouter>
   );

   // Replace "Home" with the text you expect to find in your Home component
   const homeElement = screen.getByText("Home");
   expect(homeElement).toBeInTheDocument();
});
