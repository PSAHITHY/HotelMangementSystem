import { ADD_RECEPTIONIST, LOGIN_RECEPTIONIST } from "../actions/ReservationConstants"

const initialState={
    loggedIn:null,
    newReceptionist: null
}
export default function receptionistReducer(state=initialState, action)
{
    if(action.type===LOGIN_RECEPTIONIST)
    {
        return({
            ...state,
            loggedIn: action.payload
        })
    }
    if(action.type===ADD_RECEPTIONIST)
    {
        return({
            ...state,
            newReceptionist: action.payload
        })
    }
    else{
        return state;
    }
}