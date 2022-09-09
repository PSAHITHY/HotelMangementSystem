import { RESERVATION_ADD, RESERVATION_ALL } from "../actions/ReservationConstants"

const initialState ={
    newReservation: null,
    reservations : []
}
export default function reservationReducer(state=initialState, action)
{
    if(action.type===RESERVATION_ADD)
    {
        return({
            ...state,
            newReservation: action.payload
        })
    }
    if(action.type===RESERVATION_ALL)
    {
        return({
            ...state,
            reservations: action.payload
        })
    }
    else
    {
        return state;
    }
}