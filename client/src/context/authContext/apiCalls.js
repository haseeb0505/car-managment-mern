import axios from "axios";
import { loginFailure, loginSucess, loginStart } from "./AuthAction";

export const login = async (user, dispatch) => {

    try {
        dispatch(loginStart());
        const res = await axios.post("auth/login", user)

        dispatch(loginSucess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(loginFailure());
    }

}