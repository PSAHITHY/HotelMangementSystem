import axios from "axios";
import { BASE_URL } from "../store/actions/InventoryConstants";

export function saveInventory(inventory)
{
    return axios.post(BASE_URL+ "/inventory/add",inventory)
}
export function getInventories()
{
    return axios.get(BASE_URL+ "/inventory/all")
}
export function getInventoryById(id)
{
    return axios.get(BASE_URL+ "/inventory/find/" +id)
}
export function deleteInventory(id)
{
    return axios.delete(BASE_URL+ "/inventory/delete/" +id)
}
export function modifyInventory(inventory)
{
    return axios.put(BASE_URL+"/inventory/update",inventory)
}