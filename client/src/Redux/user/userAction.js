import { Local_IP } from '../../Local_IP'
import { UserTypes } from './userTypes'

export const setUser = user => ({
    type : UserTypes.SET_USER,
    payload : user
})

export const Fail = () => ({
    type : UserTypes.FAIL
})

export const loadUser = () => async (dispatch) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('Authorization') }
    };
    const res = await fetch(`${Local_IP}/api/user/auth`, requestOptions)
    const user = await res.json()
    console.log(user)
    if(user.success){
        dispatch(setUser(user))
    }else{
        dispatch(Fail())
    }
}

export const login = (email,password) => async (dispatch) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email,password  }) 
    };
    const res = await fetch(`${Local_IP}/api/user/signin`, requestOptions)
    const data = await res.json()
    if(data.success){
        localStorage.setItem('Authorization',data.token)
        dispatch(loadUser())
    }else{
        dispatch(Fail())
    }
}

export const signUp = (name,email,password) => async(dispatch) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ name,email,password  }) 
    };
    const res = await fetch(`${Local_IP}/api/user/signup`, requestOptions)
    const data = await res.json()
    if(data.success){
        localStorage.setItem('Authorization',data.token)
        dispatch(loadUser())
    }else{
        dispatch(Fail())
    }
}

export const logOut = () => ({
    type: UserTypes.LOGOUT
})