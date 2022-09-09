import axios from 'axios';
import { BASE_URL } from '../store/actions/AdminConstants';
export function adminLogin(payload)
{
   return axios.post(BASE_URL+"/api/login",payload)
}