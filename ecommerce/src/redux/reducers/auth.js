import { SIGNUP_SUCCESS, SIGN_FAIL, AUTHENTICATED_SUCCESS, AUTHENTICATED_FAIL, SET_AUTH_LOADING, REMOVE_AUTH_LOADING } from "../actions/types";

const initialState = {
    access : localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    loading: false
}

export default function Auth(state = initialState, action){
    const {type, payload} = action
    switch (type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                loading: true
            }
        case REMOVE_AUTH_LOADING:
            return {
                ...state,
                loading: false
            }
        case AUTHENTICATED_SUCCESS:
        case AUTHENTICATED_FAIL:
            return {...state}
        case SIGNUP_SUCCESS:
        case SIGN_FAIL:
            return{...state}
            
        default:
            return state;
    }
}