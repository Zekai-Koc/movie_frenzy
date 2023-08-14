import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AboutPage from "./AboutPage";

// Mock the child components by using jest.mock()
jest.mock("../../components/Layout/Header", () => () => (
   <div>Mocked Header</div>
));
jest.mock("../../components/Cart/Cart", () => () => <div>Mocked Cart</div>);

describe("AboutPage", () => {
   it("should render the header and the image", () => {
      render(<AboutPage />);

      // Test the presence of header
      const headerText = screen.getByText("Mocked Header");
      expect(headerText).toBeInTheDocument();

      // Test the presence of the image
      const popcornImage = screen.getByAltText("Popcorn");
      expect(popcornImage).toBeInTheDocument();
   });

   it("should render the other elements", () => {
      render(<AboutPage />);

      const heroText = screen.getByText("About Us");
      expect(heroText).toBeInTheDocument();

      const ctaText = screen.getByText("Ready to Dive into the Movie Frenzy?");
      expect(ctaText).toBeInTheDocument();

      const ctaButton = screen.getByRole("link");
      expect(ctaButton).toBeInTheDocument();
   });
});
