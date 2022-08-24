import "./newCategory.css";

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createCategory } from "../../context/CategoryContext/apiCalls";
import { CategoryContext } from "../../context/CategoryContext/categoryContext";

export default function NewCategory() {
  const [user, setUser] = useState(null);
  const { dispatch } = useContext(CategoryContext);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(user, dispatch);
    history.push("/categories");
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Category</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
          <input
            type="text"
            name="type"
            placeholder="sedan"
            onChange={handleChange}
          />
        </div>




        <button className="newUserButton" type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
