const CarReducer = (state, action) => {
    switch (action.type) {
        case "GET_CARS_START":
            return {
                cars: [],
                isFetching: true,
                error: false
            };
        case "GET_CARS_SUCCESS":
            return {
                cars: action.payload,
                isFetching: false,
                error: false

            };
        case "GET_CARS_FAILURE":
            return {
                cars: [],
                isFetching: false,
                error: true
            };

        case "DELETE_CAR_START":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "DELETE_CAR_SUCCESS":
            return {
                cars: state.cars.filter((car) => car._id !== action.payload),
                isFetching: false,
                error: false

            };
        case "DELETE_CAR_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            };
        case "CREATE_CAR_START":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "CREATE_CAR_SUCCESS":
            return {
                users: [...state.users, action.payload],
                isFetching: false,
                error: false

            };
        case "CREATE_CAR_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case "UPDATE_CAR_START":
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case "UPDATE_CAR_SUCCESS":
            return {
                cars: state.cars.map((car) => car._id === action.payload._id && action.payload),
                isFetching: false,
                error: false

            };
        case "UPDATE_CAR_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return { ...state }


    };


}
export default CarReducer