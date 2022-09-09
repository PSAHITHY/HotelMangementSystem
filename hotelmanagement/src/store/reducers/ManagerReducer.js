import { MANAGER_ADD, MANAGER_LOGIN } from "../actions/StaffConstants"

const initialState={
    loggedInManager: null,
    newManager: null
}
export default function managerReducer(state=initialState, action)
{
    if(action.type===MANAGER_LOGIN)
    {
        return({
            ...state,
            loggedInManager:action.payload
        })
    }
    if(action.type===MANAGER_ADD)
    {
        return({
            ...state,
            newManager: action.payload
        })
    }
    else
    {
        return state;
    }
}