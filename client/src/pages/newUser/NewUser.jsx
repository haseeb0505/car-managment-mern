import "./newUser.css";
import { createCar } from "../../context/CarsContext/apiCalls";

import { CarContext } from "../../context/CarsContext/carContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

export default function NewUser() {
  const [user, setUser] = useState(null);
  const { dispatch } = useContext(CarContext);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCar(user, dispatch);
    history.push("/users");
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="john"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            name="contactNo"
            placeholder="+1 123 456 78"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="New York | USA"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>isAdmin?</label>
          <select
            type="text"
            name="isAdmin"
            placeholder="New York | USA"
            onChange={handleChange}
          >
            <option defaultChecked value="false">
              false
            </option>
            <option value="true">true</option>
          </select>
        </div>

        <button className="newUserButton" type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
