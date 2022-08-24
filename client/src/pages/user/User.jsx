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

import "./user.css";
import { useContext, useState } from "react";

export default function User() {
  const location = useLocation();

  let car = location.state.car;

  const { dispatch } = useContext(CarContext);

  const history = useHistory();


  const [updatedUser, setUpdatedUser] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedUser({ ...updatedUser, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCar(car._id, updatedUser, dispatch);
    history.push("/cars");
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Car</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
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
      </div>
    </div>
  );
}
