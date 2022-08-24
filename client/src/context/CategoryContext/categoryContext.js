import CategoryReducer from "./categoryReducer";
import { createContext } from "react";
import React from "react";

const INITIAL_STATE = {
    categories: [],
    isFetching: false,
    error: false
}
export const CategoryContext = createContext(INITIAL_STATE);
export const CategoryContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(CategoryReducer, INITIAL_STATE);


    return (
        <CategoryContext.Provider
            value={{
                categories: state.categories,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );

}
