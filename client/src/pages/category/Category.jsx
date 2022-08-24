import {
  CalendarToday,

  PermIdentity,

} from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import { CategoryContext } from "../../context/CategoryContext/categoryContext";
import { updateCategory } from "../../context/CategoryContext/apiCalls"

import "./category.css";
import { useContext, useState } from "react";

export default function Category() {
  const location = useLocation();

  let category = location.state.category;

  const { dispatch } = useContext(CategoryContext);

  const history = useHistory();


  const [updatedcategory, setUpdatedCategory] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setUpdatedCategory({ ...updatedcategory, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(category._id, updatedcategory, dispatch);
    history.push("/categories");
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
              <span className="userShowUsername">{category?.type}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Category Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">ID: {category?._id}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">CreatedAt: {category?.createdAt}</span>
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
                  name="type"
                  placeholder={category?.type}
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
