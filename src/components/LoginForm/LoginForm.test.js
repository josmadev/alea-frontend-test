/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { AuthContextProvider } from "../../contexts/authContext";
import LoginForm from "./LoginForm";
import { loginFetch } from "../../utils/loginFetch";

describe("LoginForm", () => {
  test("should render LoginForm", () => {
    const { getByText, getByLabelText } = render(
      <AuthContextProvider>
        <LoginForm />
      </AuthContextProvider>
    );

    const emailLabel = getByText("Email");
    const passwordLabel = getByText("Password");
    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    const inputEmail = getByLabelText("Email");
    expect(inputEmail).toHaveAttribute("type", "email");
    const inputPassword = getByLabelText("Password");
    expect(inputPassword).toHaveAttribute("type", "password");
  });

  test("login function should return token", async () => {
    const loging = await loginFetch("george.bluth@reqres.in", "123456");
    expect(loging).toEqual({ token: "QpwL5tke4Pnpja7X1" });
  });

  test("should render error message", async () => {
    const loging = await loginFetch("qres.in", "123232");

    const condition = loging.error ? true : false;
    const { getByText } = render(
      <AuthContextProvider>
        <LoginForm errorMessage={condition} />
      </AuthContextProvider>
    );

    expect(getByText("Invalid username or password")).toBeInTheDocument();
  });
});
