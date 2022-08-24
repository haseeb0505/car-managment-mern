import React, { useContext } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleclick = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="Login">
      <form action="" className="loginform">
        <input
          type="text"
          className="loginInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="loginInput"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="loginButton"
          onClick={handleclick}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}
