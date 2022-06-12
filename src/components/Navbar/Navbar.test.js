import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AuthContextProvider } from "../../contexts/authContext";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render Navbar", () => {
    const { getByText } = render(
      <AuthContextProvider>
        <Navbar />
      </AuthContextProvider>
    );
    const titlePage = getByText("User:");
    expect(titlePage).toBeInTheDocument();
  });
});
