import "./LoginFormStyles.css";

const LoginForm = props => {
  const {
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    errorMessage,
  } = props;

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label className="label">
          Email
          <input
            className="inputLogin"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            onChange={handleChangeEmail}
            required
          />
        </label>
        <label className="label">
          Password
          <input
            className="inputLogin"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleChangePassword}
            required
          />
        </label>
        <button className="loginButton" type="submit">
          Login
        </button>
        {errorMessage && (
          <p className="loginError">Invalid username or password</p>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
