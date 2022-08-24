import axios from "axios";
import {
    getCarsStart,
    getCarsSuccess,
    getCarsFailure,
    deleteCarStart,
    deleteCarSuccess,
    deleteCarFailure,
    createCarStart,
    createCarSuccess,
    createCarFailure,
    updateCarStart,
    updateCarSuccess,
    updateCarFailure
} from "./carAction";

export const getCars = async (dispatch) => {

    try {
        dispatch(getCarsStart());
        const res = await axios.get("/cars", { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accessToken } });

        dispatch(getCarsSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(getCarsFailure());
    }

}

export const createCar = async (car, dispatch) => {

    try {
        dispatch(createCarStart());
        const res = await axios.post("/cars/", car);

        dispatch(createCarSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(createCarFailure());
    }

}
export const updateCar = async (id, user, dispatch) => {

    try {
        dispatch(updateCarStart());
        const res = await axios.put("/cars/" + id, user, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accesstoken } });

        dispatch(updateCarSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(updateCarFailure());
    }

}

export const deleteCar = async (id, dispatch) => {

    try {
        dispatch(deleteCarStart());
        await axios.delete("/cars/" + id, { headers: { token: "bearer " + JSON.parse(localStorage.getItem("user")).data.accesstoken } });

        dispatch(deleteCarSuccess(id));


    } catch (error) {
        console.log(error);
        dispatch(deleteCarFailure());
    }

}