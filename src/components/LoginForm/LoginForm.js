import { useState } from "react";
import { useAuthContext } from "../../contexts/authContext";
import { fetchData } from "../../helpers/fecthData";
import "./LoginFormStyles.css";

const LoginForm = () => {
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
    console.log(email, password);
    const data = await fetchData(
      `${process.env.REACT_APP_API_URL}/login`,
      "POST",
      { email, password }
    );
    if (data.token) {
      login(email);
    } else {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="inputLogin"
          type="email"
          placeholder="Username"
          onChange={handleChangeEmail}
          required
        />
        <input
          className="inputLogin"
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
          required
        />
        <button className="loginButton" type="submit">
          Login
        </button>
        {error && <p className="loginError">Invalid username or password</p>}
      </form>
    </div>
  );
};

export default LoginForm;
