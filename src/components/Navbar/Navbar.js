import React from "react";
import { useAuthContext } from "../../contexts/authContext";
import "./navbarStyles.css";

const Navbar = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className="headerContainer">
      <span className="emailUser">
        <strong>User:</strong> {user}
      </span>
      <button className="buttonLogout" onClick={logout}>
        Logout
      </button>
    </header>
  );
};

export default Navbar;
