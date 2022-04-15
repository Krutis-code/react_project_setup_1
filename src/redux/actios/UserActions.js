import { ActionTypes } from "../constants/action_types";
import UserApiStore from "../../api/UserApiStore";
import { useNavigate } from 'react-router-dom';

const headers = {
    'Content-Type':'application/json'
}


export const userlogin = (userdata) =>{
    return async function(dispatch, getState){
        
        // const Navigate  = useNavigate()

        const res = await UserApiStore.post('/api/login', {
            ...userdata
        })


        console.log("response user login", res);
        dispatch({type:ActionTypes.USER_LOGIN, payload:res})
        // Navigate('/home')
    }

}


