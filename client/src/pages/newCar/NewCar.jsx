import "./newCar.css";
import { createCar } from "../../context/CarsContext/apiCalls";

import { CarContext } from "../../context/CarsContext/carContext";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function NewCar() {
  const [car, setCar] = useState(null);
  const [category, setCategory] = useState([]);
  const { dispatch } = useContext(CarContext);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setCar({ ...car, [e.target.name]: value, ownerId: JSON.parse(localStorage.getItem("user")).data._id });

  };

  useEffect(() => {
    const getCat = async () => {
      try {
        let res = await axios.get("/category", { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken } })
        setCategory(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCat()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    createCar(car, dispatch);
    history.push("/cars");
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Car</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Corolla"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder="white"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Make</label>
          <input
            type="text"
            name="make"
            placeholder="Toyota"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Model</label>
          <input
            type="number"
            name="model"
            placeholder="2020"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Registration No</label>
          <input
            type="text"
            name="registrationNo"
            placeholder="abc-123"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Category</label>
          <select
            type="text"
            name="categoryId"
            placeholder="suv/sedan"
            onChange={handleChange}
          >
            {category.map(item => (
              <option value={item._id} key={item._id} >{item.type}</option>
            ))
            }

          </select>
        </div>


      </form>
      <button className="newUserButton" type="submit" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
}
