import { BASE_URL } from "../store/actions/ActionConstants";
import axios from 'axios';
export function addRooms(room) {
    return axios.post(BASE_URL + "/room/add", room)
}
export function getRooms()
{
    return axios.get(BASE_URL+ "/room/all")
}
export function getRoom(id)
{
    return axios.get(BASE_URL+ "/room/find/"+id)
}
export function searchRooms(roomType, roomDesc)
{
    return axios.get(BASE_URL+ "/room/"+roomType+"/"+roomDesc)
}
export function deleteRoom(id)
{
    return axios.delete(BASE_URL +"/room/delete/"+id)
}
export function modifyRoom(room)
{
    return axios.put(BASE_URL+"/room/update",room)
}
export function checkOutRoom(roomNo)
{
    return axios.put(BASE_URL+"/room/checkout/"+roomNo)
}
export function getAvail()
{
    return axios.get(BASE_URL+"/room/available")
}