import { fetchAllReservations, makeReservation } from "../../services/ReservationService"
import { RESERVATION_ADD, RESERVATION_ALL } from "./ReservationConstants";

export function addReservation(reservation)
{
    return(dispatch) =>{
        makeReservation(reservation).then(
            resp =>{
                dispatch(addReservationSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data);
        })
    }
}
export function addReservationSuccess(data)
{
    return{
        type:RESERVATION_ADD,
        payload:data
    }
}
export function getAllReservations()
{
    return(dispatch) =>{
        fetchAllReservations().then(
            resp =>{
                dispatch(getAllReservationsSuccess(resp.data))
            }
        )
    }
}
export function getAllReservationsSuccess(data)
{
    return{
        type:RESERVATION_ALL,
        payload: data
    }
}