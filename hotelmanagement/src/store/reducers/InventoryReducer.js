import { INVENTORY_ADD, INVENTORY_ALL, INVENTORY_BYID, INVENTORY_UPDATE } from "../actions/InventoryConstants"

const initialState ={
    newInventory: null,
    inventories:[],
    inventory:null,
    updatedInventory: null
}
export default function inventoryReducer(state=initialState, action)
{
    if(action.type ===INVENTORY_ADD)
    {
        return(
            {
                ...state,
                newInventory: action.payload
            }
        )
    }
    if(action.type===INVENTORY_ALL)
    {
        return(
            {
                ...state,
                inventories: action.payload
            }
        )
    }
    if(action.type===INVENTORY_BYID)
    {
        return(
            {
                ...state,
                inventory: action.payload
            }
        )
    }
    if(action.type===INVENTORY_UPDATE)
    {
        return(
            {
                ...state,
                updatedInventory: action.payload
            }
        )
    }
    else{
        return state;
    }
}