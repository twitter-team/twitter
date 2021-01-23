import { UserTypes } from './userTypes'

const INITIAL_STATE = {
    token: localStorage.getItem('Authorization'),
    loading: true,
    isAuth: false,
    user: null
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserTypes.SET_USER:
            return {
                ...state,
                loading: false,
                isAuth: true,
                user: action.payload
            };
        case UserTypes.FAIL:
            return {
                ...state,
                loading: false,
                isAuth: false,
                user: null
            };
        case UserTypes.LOGOUT:
            localStorage.removeItem('Authorization')
            return {
                ...state,
                loading: false,
                isAuth: false,
                user: null
            }
        default:
            return state;
    }
};

export default userReducer;