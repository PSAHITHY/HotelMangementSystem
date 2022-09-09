import axios from "axios";
import { BASE_URL } from "../store/actions/DepartmentConstants";
export function saveDepartment(department)
{
    return axios.post(BASE_URL+"/department/add", department)
}
export function fetchDepartment(id)
{
    return axios.get(BASE_URL+"/department/find/"+id)
}
export function fetchDepartments()
{
    return axios.get(BASE_URL+"/department/all")
}
export function deleteDepartment(id)
{
    return axios.delete(BASE_URL+"/department/delete/"+id)
}
export function updateDepartment(department)
{
    return axios.put(BASE_URL+"/department/update",department)
}