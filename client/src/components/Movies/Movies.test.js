import React from "react";
import Movies from "./Movies";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TEST-1: check if the Movies.test.j file configured correctly.", () => {
   it("true is truthy", () => {
      expect(true).toBe(true);
   });

   it("false is falsy", () => {
      expect(false).toBe(false);
   });
});

describe("TEST-2: plain render", () => {
   it("renders Movies component simple render", () => {
      render(<Movies />);
   });
});

describe("TEST-3: check element", () => {
   it("renders Movies component and checks one element.", () => {
      render(<Movies />);
      const containerMovies = screen.getByTestId("container-movies");
      expect(containerMovies).toBeInTheDocument();
   });
});

describe("TEST-4: check elements", () => {
   it("renders Movies component and checks other elements.", () => {
      render(<Movies />);
      // screen.debug();
      const containerMovies = screen.getByTestId("container-movies");
      expect(containerMovies).toBeInTheDocument();

      const containerMoviesTop = screen.getByTestId("container-movies-top");
      expect(containerMoviesTop).toBeInTheDocument();

      const containerMoviesBottom = screen.getByTestId(
         "container-movies-bottom"
      );
      expect(containerMoviesBottom).toBeInTheDocument();

      // const searchButton = screen.getByText("Search");
      // expect(searchButton).toBeInTheDocument();
   });
});

describe("TEST-5: find button and trigger event", () => {
   it("renders Movies component and checks button element.", () => {
      render(<Movies />);

      const searchInput = screen.getByRole("textbox");
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toBeEmptyDOMElement();

      const searchButton = screen.getByRole("button");
      expect(searchButton).toBeInTheDocument();

      // fireEvent.change(searchInput, { target: { value: "Avangers" } });

      // userEvent.click(searchButton);
   });
});
