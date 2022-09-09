import axios from "axios";
import { BASE_URL } from "../store/actions/StaffConstants";
export function managerLogin(payload)
{
    return axios.post(BASE_URL+"/api/signin",payload)
}
export function managerRegister(manager)
{
    return axios.post(BASE_URL+"/api/signup",manager)
}