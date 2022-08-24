import {
  CalendarToday,
  Contactless,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import { CarContext } from "../../context/CarsContext/carContext";
import { updateCar } from "../../context/CarsContext/apiCalls";

import "./car.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Car() {
  const location = useLocation();

  let car = location.state.car;

  const { dispatch } = useContext(CarContext);

  const history = useHistory();


  const [updatedCar, setUpdatedCar] = useState(null);
  const [category, setCategory] = useState([]);

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

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedCar({ ...updatedCar, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCar(car._id, updatedCar, dispatch);
    history.push("/cars");
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Car</h1>

      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://media.istockphoto.com/vectors/car-icon-auto-vehicle-isolated-transport-icons-automobile-silhouette-vector-id1273534607?k=20&m=1273534607&s=612x612&w=0&h=Uynt53JLF7_JUxklSlCNP-KVm-CNLUkgpgewc2AOO2I=" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{car.name}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Car Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{car._id}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">{car.createdAt}</span>
            </div>
            <span className="userShowTitle">Model Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">
                {car.model}
              </span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">{car.color}</span>
            </div>
            <div className="userShowInfo">
              <Contactless className="userShowIcon" />
              <span className="userShowInfoTitle">{car.make}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder={car.name}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>

              <div className="userUpdateItem">
                <label>make</label>
                <input
                  type="text"
                  name="make"
                  placeholder={car.make}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Model</label>
                <input
                  type="text"
                  name="model"
                  placeholder={car.model}
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>color</label>
                <input
                  type="text"
                  name="color"
                  placeholder={
                    car.color
                  }
                  className="userUpdateInput"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>category</label>
                <select
                  type="select"
                  name="categoryId"
                  className="userUpdateInput"
                  onChange={handleChange}
                >
                  {category.map(item => (
                    <option value={item._id} key={item._id} >{item.type}</option>
                  ))
                  }
                </select>
              </div>

            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className="userUpdateImg" src="https://media.istockphoto.com/vectors/car-icon-auto-vehicle-isolated-transport-icons-automobile-silhouette-vector-id1273534607?k=20&m=1273534607&s=612x612&w=0&h=Uynt53JLF7_JUxklSlCNP-KVm-CNLUkgpgewc2AOO2I=" alt="" />
              </div>
              <button
                className="userUpdateButton"
                type="submit"
                onClick={handleSubmit}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}
