import axios from "axios";
import {
    getCategoriesStart,
    getCategoriesSuccess,
    getCategoriesFailure,
    createCategoryStart,
    createCategorySuccess, createCategoryFailure,
    updateCategoryStart, updateCategorySuccess, updateCategoryFailure,
    deleteCategoryStart, deleteCategorySuccess, deleteCategoryFailure
} from "./categoryAction";

export const getCategories = async (dispatch) => {

    try {
        dispatch(getCategoriesStart());
        const res = await axios.get("/category", { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken } });

        dispatch(getCategoriesSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(getCategoriesFailure());
    }

}

export const createCategory = async (category, dispatch) => {

    try {
        dispatch(createCategoryStart());
        const res = await axios.post("/category/", category, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken } });

        dispatch(createCategorySuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(createCategoryFailure());
    }

}
export const updateCategory = async (id, category, dispatch) => {

    try {

        dispatch(updateCategoryStart());
        const res = await axios.put("/category/" + id, category, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken } });

        dispatch(updateCategorySuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(updateCategoryFailure());
    }

}

export const deleteCategory = async (id, dispatch) => {

    try {
        dispatch(deleteCategoryStart());
        await axios.delete("/category/" + id, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken } });
        console.log("deleted")
        dispatch(deleteCategorySuccess(id));


    } catch (error) {
        console.log(error);
        dispatch(deleteCategoryFailure());
    }

}