import axios from "axios";
import { BASE_URL } from "../store/actions/ReservationConstants";
export function makeReservation(reservation)
{
    return axios.post(BASE_URL+"/reservation/add",reservation)
}
export function fetchAllReservations()
{
    return axios.get(BASE_URL+"/reservation/all")
}