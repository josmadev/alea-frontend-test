/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-unreachable */
import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { AuthContextProvider, useAuthContext } from "./AuthContext";

describe("AuthContext", () => {
  const TestComponent = () => {
    const { user, login, logout, isAuthenticated } = useAuthContext();
    return (
      <div>
        {isAuthenticated ? (
          <>
            <p>User: {user}</p>
            <button onClick={() => logout()}>Logout</button>
          </>
        ) : (
          <button onClick={() => login("george.bluth@reqres.in", "123456")}>
            Login
          </button>
        )}
      </div>
    );
  };

  test("loging and logout buttons should works", async () => {
    const { getByRole, getByText } = render(
      <AuthContextProvider>
        <TestComponent />
      </AuthContextProvider>
    );

    fireEvent.click(getByRole("button", { name: "Login" }));
    await waitFor(() => {
      expect(getByText("Logout")).toBeInTheDocument();
      expect(getByText("User: george.bluth@reqres.in")).toBeInTheDocument();
    });

    fireEvent.click(getByRole("button", { name: "Logout" }));
    await waitFor(() => {
      expect(getByText("Login")).toBeInTheDocument();
    });
  });
});
