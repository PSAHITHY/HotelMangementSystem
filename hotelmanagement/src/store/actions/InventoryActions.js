import { getInventories, modifyInventory, saveInventory } from "../../services/InventoryService"
import { getInventoryById } from "../../services/InventoryService";
import { deleteInventory } from "../../services/InventoryService";
import { INVENTORY_ADD, INVENTORY_ALL, INVENTORY_BYID, INVENTORY_DELETE, INVENTORY_UPDATE } from "./InventoryConstants";

export function addInventory(inventory)
{
    return(dispatch) => {
        saveInventory(inventory).then(
            resp =>{
                dispatch(addInventorySucces(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data);
        })
    }
}
export function addInventorySucces(data)
{
    return{
        type: INVENTORY_ADD,
        payload: data
    }
}
export function getAllInventories()
{
    return(dispatch) => {
        getInventories().then(
            resp =>{
                dispatch(getAllInventoriesSucces(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function getAllInventoriesSucces(data)
{
    return{
        type: INVENTORY_ALL,
        payload: data
    }
}
export function getInventoryId(id)
{
    return(dispatch) =>{
        getInventoryById(id).then(
            resp => {
            dispatch(getInventoryIdSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function getInventoryIdSuccess(data)
{
    return{
        type: INVENTORY_BYID,
        payload: data
    }
}
export function deleteInventoryById(id)
{
    return(dispatch) =>{
        deleteInventory(id).then(
            resp => {
                dispatch(deleteInventoryByIdSucces(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function deleteInventoryByIdSucces(data)
{
    return{
        type: INVENTORY_DELETE,
        payload: data
    }
}
export function changeInventory(inventory)
{
    return(dispatch) =>{
        modifyInventory(inventory).then(
            resp =>{
                dispatch(updateInventorySuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function updateInventorySuccess(data)
{
    return{
        type: INVENTORY_UPDATE,
        payload: data
    }
}