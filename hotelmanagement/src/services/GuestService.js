import axios from 'axios';
import { BASE_URL } from '../store/actions/GuestConstants';
export  function saveGuest(guest)
{
   return axios.post(BASE_URL+"/guest/add",guest)
}
export  function fetchAllGuest()
{
    return axios.get(BASE_URL+"/guest/all")
}
export  function fetchGuest(id)
{
    return axios.get(BASE_URL+"/guest/find/"+id)
}
export  function modifyGuest(guest)
{
    return  axios.put(BASE_URL+"/guest/update",guest)
}
export  function removeGuest(id)
{
    return axios.delete(BASE_URL+"/guest/delete/"+id)
}