import axios from "axios";
import { SIGNUP_SUCCESS, SIGN_FAIL } from "./types";

export const signup = ( first_name, last_name, email, password, re_password) => async dispatch =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password, 
        re_password
    })

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users`, body, config)
        if (res.status === 201){
            dispatch({
                type: SIGNUP_SUCCESS, 
                payload: res.data
            })
        }else{
            dispatch({
                type: SIGN_FAIL, 
            })
        }
    } catch (error) {
        console.error(error)
    }
}