import { ActionTypes } from "../constants/action_types";

const initialState={
    token:"",
    loader:false,
}

export const userReducer = (state = initialState, {type,payload}) =>{
    switch(type){
        case ActionTypes.USER_LOGIN:
            console.log("payload userlogin",payload);
            return {...state,token:payload};
        
        case ActionTypes.USER_LOGOUT:
            return {...state,token:""};

        case ActionTypes.SET_LOADER:
            return {...state,loader:true};

        case ActionTypes.UNSET_LOADER:
            return {...state,loader:false};

        default:
            return state;
    }
}