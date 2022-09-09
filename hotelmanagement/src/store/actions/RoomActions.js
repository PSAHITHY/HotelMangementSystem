import { addRooms, checkOutRoom, deleteRoom, getAvail, getRoom, getRooms, modifyRoom, searchRooms } from "../../services/RoomService";
import { ROOMS_FOUND, ROOM_ADD, ROOM_ALL, ROOM_AVAIL, ROOM_CHECKOUT, ROOM_DELETE, ROOM_FETCH_BYID, ROOM_UPDATE } from "./ActionConstants";
export function addRoom(room)
{
    return (dispatch) => {
        addRooms(room).then(
            resp => {
                dispatch(addRoomSuccess(resp.data));
            }
        )
            .catch(error => {
                alert(error.response.data)
            })
    }
}
export function addRoomSuccess(data) {
    return {
        type: ROOM_ADD,
        payload: data
    }
}
export function getAllRooms()
{
    return(dispatch) =>{
        getRooms().then(
            resp => {
                console.log(resp.data);
                dispatch(getAllRoomsSuccess(resp.data));
            }
        )
        .catch(error => {
            alert(error.response.data)
        })
        
    }
}
export function getAllRoomsSuccess(data)
{
    return{
        type: ROOM_ALL,
        payload: data
    }
}
export function getRoomById(id)
{
    return(dispatch) =>{
        getRoom(id).then(
            resp => {
                dispatch(getRoomByIdSucces(resp.data));
            }
        )
        .catch(error => {
            alert(error.response.data)
        })
    }
}
export function getRoomByIdSucces(data)
{
    return{
        type: ROOM_FETCH_BYID,
        payload: data
    }
}
export function searchRoomByType(roomType, roomDesc)
{
    return(dispatch) =>{
        searchRooms(roomType,roomDesc).then(
            resp => {
                // console.log(resp.data);
                dispatch(searchRoomByTypeSuccess(resp.data));
            }
        )
        .catch(error => {
            alert(error.response.data)
        })
    }
}
export function searchRoomByTypeSuccess(data)
{
    return{
        type: ROOMS_FOUND,
        payload: data
    }
}
export function deleteRoomById(id)
{
    return(dispatch) =>{
        deleteRoom(id).then(
            resp =>{
                dispatch(deleteRoomByIdSuccess(resp.data));
            }
        )
        .catch(error => {
            alert(error.response.data)
        })
    }
}
export function deleteRoomByIdSuccess(data)
{
    return{
        type:ROOM_DELETE,
        payload:data
    }
}
export function updateRoom(room)
{
    return(dispatch) =>{
        modifyRoom(room).then(
            resp =>{
                dispatch(updateRoomSuccess(resp.data));
            }
        )
    }
}
export function updateRoomSuccess(data)
{
    return{
        type:ROOM_UPDATE,
        payload:data
    }
}
export function checkOut(roomNo)
{
    return(dispatch) =>{
        checkOutRoom(roomNo).then(
            resp =>{
                dispatch(checkOutSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function checkOutSuccess(data)
{
    return{
        type: ROOM_CHECKOUT,
        payload: data
    }
}
export function getAllAvailable()
{
    return(dispatch) =>{
        getAvail().then(
            resp =>{
                dispatch(getAllAvailableSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function getAllAvailableSuccess(data)
{
   return{
    type:ROOM_AVAIL,
    payload: data
   }
}