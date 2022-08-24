export const getCarsStart = () => ({
    type: "GET_CARS_START"
});
export const getCarsSuccess = (cars) => ({
    type: "GET_CARS_SUCCESS",
    payload: cars
});
export const getCarsFailure = () => ({
    type: "GET_CARS_FAILURE"
});
export const createCarStart = () => ({
    type: "CREATE_CAR_START"
});
export const createCarSuccess = (car) => ({
    type: "CREATE_CAR_SUCCESS",
    payload: car
});
export const createCarFailure = () => ({
    type: "CREATE_CAR_FAILURE"
});
export const updateCarStart = () => ({
    type: "UPDATE_CAR_START"
});
export const updateCarSuccess = (car) => ({
    type: "UPDATE_CAR_SUCCESS",
    payload: car
});
export const updateCarFailure = () => ({
    type: "UPDATE_CAR_FAILURE"
});
export const deleteCarStart = () => ({
    type: "DELETE_CAR_START"
});
export const deleteCarSuccess = (id) => ({
    type: "DELETE_CAR_SUCCESS",
    payload: id
});
export const deleteCarFailure = () => ({
    type: "DELETE_CAR_FAILURE"
});