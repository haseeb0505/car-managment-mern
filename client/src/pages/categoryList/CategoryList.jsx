import "./categoryList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getCategories, deleteCategory } from "../../context/CategoryContext/apiCalls";
import { CategoryContext } from "../../context/CategoryContext/categoryContext";

export default function CategoryList() {

  const { categories, dispatch } = useContext(CategoryContext);

  useEffect(() => {
    getCategories(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteCategory(id, dispatch);
  };


  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "name",
      headerName: "name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src="https://media.istockphoto.com/vectors/car-icon-auto-vehicle-isolated-transport-icons-automobile-silhouette-vector-id1273534607?k=20&m=1273534607&s=612x612&w=0&h=Uynt53JLF7_JUxklSlCNP-KVm-CNLUkgpgewc2AOO2I=" alt="" />
            {params.row.type}
          </div>
        );
      },
    },

    { field: "createdAt", headerName: "CreatedAt", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={{
                pathname: `/category/${params.row._id}`,
                state: { category: params.row },
              }}
            >
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (

    <div className="userList">

      <DataGrid
        rows={categories}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r._id}

      />
    </div>
  );
}
