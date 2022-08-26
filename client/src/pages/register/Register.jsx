import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");

  const history = useHistory();
  const handleclick = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post("http://localhost:5000/api/auth/register", { username, email })

      if (res.status === 200) {

        history.push("/login")
      }

    } catch (error) {
      console.log(error);
    }



  };
  return (
    <div className="Login">
      <h1 className="h1">Create An Account</h1>
      <form action="" className="loginform">
        <input
          type="text"
          className="loginInput"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="loginInput"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="aggrement">
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <button
          type="button"
          className="loginButton"
          onClick={handleclick}

        >
          Register
        </button>
      </form>

    </div>
  );
}
