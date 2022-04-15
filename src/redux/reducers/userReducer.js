import { ActionTypes } from "../constants/action_types";

const initialState={}

export const userReducer = (state = initialState, {type,payload}) =>{
    switch(type){
        case ActionTypes.USER_LOGIN:
            return {...state,token:payload};
        
        case ActionTypes.USER_LOGOUT:
            return {...state,user:{}};

        default:
            return state;
    }
}