import { deleteStaff, fetchAllStaff, fetchStaff, modifyStaff, saveStaff } from "../../services/StaffService"
import { STAFF_ADD, STAFF_ALL, STAFF_BYID, STAFF_DELETE, STAFF_UPDATE } from "./StaffConstants"

export function addStaff(staff)
{
    return(dispatch) =>{
        saveStaff(staff).then(
            resp =>{
                dispatch(addStaffSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function addStaffSuccess(data)
{
    return{
        type: STAFF_ADD,
        payload: data
    }
}
export function getAllStaff()
{
    return(dispatch) =>{
        fetchAllStaff().then(
           resp =>{
            dispatch(getAllStaffSuccess(resp.data))
            }
        )
    }
}
export function getAllStaffSuccess(data)
{
    return{
        type:STAFF_ALL,
        payload: data
    }
}
export function getStaff(id)
{
    return(dispatch)=>{
        fetchStaff(id).then(
            resp =>{
                dispatch(getStaffSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function getStaffSuccess(data)
{
    return{
        type: STAFF_BYID,
        payload: data
    }
}
export function deleteStaffById(id)
{
    return(dispatch)=>{
        deleteStaff(id).then(
            resp =>{
                dispatch(deleteStaffByIdSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function deleteStaffByIdSuccess(data)
{
    return{
        type:STAFF_DELETE,
        payload:data
    }
}
export function updateStaff(staff)
{
    return(dispatch) =>{
        modifyStaff(staff).then(
            resp =>{
                dispatch(updateStaffSuccess(resp.data))
            }
        )
    }
}
export function updateStaffSuccess(data)
{
    return{
        type:STAFF_UPDATE,
        payload:data
    }
}