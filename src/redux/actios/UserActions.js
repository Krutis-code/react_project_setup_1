import { ActionTypes } from "../constants/action_types";
import UserApiStore from "../../api/UserApiStore";

const headers = {
    'Content-Type': 'application/json'
}


export const userlogin = (userdata) => async (dispatch) => {

    dispatch({ type: ActionTypes.SET_LOADER, payload: {} })
    console.log("inside middle ware......................")

    const res = await UserApiStore.post('/api/login', {
        ...userdata
    })

    dispatch({ type: ActionTypes.USER_LOGIN, payload: res.data.token })

    console.log("after data etched async function response user login", res);
    dispatch({ type: ActionTypes.UNSET_LOADER, payload: {} })


}

export const userlogout = () => async (dispatch) =>{
    dispatch({type:ActionTypes.USER_LOGOUT,payload:""})
}


