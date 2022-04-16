import { ActionTypes } from "../constants/action_types";
import UserApiStore from "../../api/UserApiStore";
import { useNavigate } from 'react-router-dom';

const headers = {
    'Content-Type':'application/json'
}


export const userlogin = (userdata) => async (dispatch) =>{
    
        // const Navigate  = useNavigate()
        dispatch({type:ActionTypes.SET_LOADER, payload:{}})
        console.log("inside middle ware......................")

        const res = await UserApiStore.post('/api/login', {
            ...userdata
        })

        dispatch({type:ActionTypes.USER_LOGIN, payload:res.data.token})

        console.log("after data etched async function response user login", res);
        dispatch({type:ActionTypes.UNSET_LOADER,payload:{}})
        // Navigate('/home')
    

}

// export const userlogin = (token) => {
//     return {type:ActionTypes.USER_LOGIN, payload:token}
// }

