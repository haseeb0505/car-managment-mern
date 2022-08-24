import CarReducer from "./carReducer";
import { createContext } from "react";
import React from "react";

const INITIAL_STATE = {
    cars: [],
    isFetching: false,
    error: false
}
export const CarContext = createContext(INITIAL_STATE);
export const CarContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(CarReducer, INITIAL_STATE);


    return (
        <CarContext.Provider
            value={{
                cars: state.cars,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </CarContext.Provider>
    );

}
