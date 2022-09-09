import { fetchAllGuest, fetchGuest, modifyGuest, removeGuest, saveGuest } from "../../services/GuestService"
import { GUEST_ADD, GUEST_ALL, GUEST_BYID, GUEST_DELETE, GUEST_UPDATE } from "./GuestConstants"

export function addGuest(guest)
{
    return(dispatch) =>{
        saveGuest(guest).then(
            resp =>{
                dispatch(addGuestSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function addGuestSuccess(data)
{
    return{
        type: GUEST_ADD,
        payload: data
    }
}
export function getAllGuest()
{
    return(dispatch) =>{
        fetchAllGuest().then(
            resp =>{
                dispatch(getAllGuestSuccess(resp.data))
            }
        )
    }
}
export function getAllGuestSuccess(data)
{
    return{
        type: GUEST_ALL,
        payload: data
    }
}
export function getGuestById(id)
{
    return(dispatch) =>{
        fetchGuest(id).then(
            resp =>{
                dispatch(getGuestByIdSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function getGuestByIdSuccess(data)
{
    return{
        type: GUEST_BYID,
        payload: data
    }
}
export function deleteGuest(id)
{
    return(dispatch) =>{
        removeGuest(id).then(
            resp =>{
                dispatch(deleteGuestSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function deleteGuestSuccess(data)
{
    return{
        type: GUEST_DELETE,
        payload: data
    }
}
export function updateGuest(guest)
{
    return(dispatch) =>{
        modifyGuest(guest).then(
            resp =>{
                dispatch(updateGuestSuccess(resp.data));
            }
        )
    }
}
export function updateGuestSuccess(data)
{
    return{
        type: GUEST_UPDATE,
        payload: data
    }
}