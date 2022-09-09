import { GUEST_ADD, GUEST_ALL, GUEST_BYID, GUEST_DELETE, GUEST_UPDATE } from "../actions/GuestConstants"

const initialState={
    newGuest: null,
    guests: [],
    guest: null,
    deletedGuest: null,
    updatedGuest: null
}
export default function guestReducer(state=initialState, action)
{
    if(action.type===GUEST_ADD)
    {
        return({
            ...state,
            newGuest: action.payload
        })
    }
    if(action.type===GUEST_ALL)
    {
        return({
            ...state,
            guests: action.payload
        })
    }
    if(action.type===GUEST_BYID)
    {
        return({
            ...state,
            guest: action.payload
        })
    }
    if(action.type===GUEST_DELETE)
    {
        return({
            ...state,
            deletedGuest: action.payload
        })
    }
    if(action.type===GUEST_UPDATE)
    {
       return({
        ...state,
        updatedGuest: action.payload
       })
    }
    else
    {
        return state;
    }
}