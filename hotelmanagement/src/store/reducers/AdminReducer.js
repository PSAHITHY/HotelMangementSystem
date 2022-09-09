import { ADMIN_LOGIN } from "../actions/AdminConstants"

const initialState={
    loggedInAdmin: null
}
export default function adminReducer(state=initialState,action)
{
 if(action.type===ADMIN_LOGIN)
 {
    return({
        ...state,
        loggedInAdmin: action.payload
    })
 }
 else{
    return state;
 }
}