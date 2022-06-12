import React, { useState } from "react";
import { loginFetch } from "../../utils/loginFetch";
import { useAuthContext } from "../../contexts/authContext";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./LoginStyles.css";

const Login = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleChangeEmail = (event, type) => {
    setEmail(event.target.value);
    setError(false);
  };

  const handleChangePassword = (event, type) => {
    setPassword(event.target.value);
    setError(false);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const data = await loginFetch(email, password);
    if (data.token) {
      login(email);
    } else {
      setError(true);
    }
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <img src="images/undraw_Login_re_4vu2.png" alt="login-img" width="40%" />
      <LoginForm
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
        errorMessage={error}
      />
    </div>
  );
};

export default Login;
