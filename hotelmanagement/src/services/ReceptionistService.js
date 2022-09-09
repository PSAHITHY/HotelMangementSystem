import axios from "axios";
import { BASE_URL } from "../store/actions/ReservationConstants";
export function loginReceptionist(payload)
{
    return axios.post(BASE_URL+ "/api/signin",payload)
}
export function registerReceptionist(receptionist)
{
    return axios.post(BASE_URL+"/api/signup",receptionist)
}