/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AuthContextProvider } from "../../contexts/authContext";
import Users from "./Users";

describe("Users page", () => {
  test("should render Users page", () => {
    const { getByText } = render(
      <AuthContextProvider>
        <Users />
      </AuthContextProvider>
    );
    const titlePage = getByText("Users");
    expect(titlePage).toBeInTheDocument();
  });
});
