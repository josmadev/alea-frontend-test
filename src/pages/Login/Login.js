import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginStyles.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <img src="images/undraw_Login_re_4vu2.png" alt="login-img" width="40%" />
      <LoginForm />
    </div>
  );
};

export default Login;
