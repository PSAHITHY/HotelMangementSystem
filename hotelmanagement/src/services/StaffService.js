import axios from 'axios';
import { BASE_URL } from '../store/actions/StaffConstants';
export function saveStaff(staff)
{
    return axios.post(BASE_URL+"/staff/add",staff)
}
export function fetchAllStaff()
{
    return axios.get(BASE_URL+"/staff/all")
}
export function fetchStaff(id)
{
    return axios.get(BASE_URL+"/staff/find/"+id)
}
export function modifyStaff(staff)
{
    return axios.put(BASE_URL+"/staff/update",staff)
}
export function deleteStaff(id)
{
    return axios.delete(BASE_URL+"/staff/delete/"+id)
}