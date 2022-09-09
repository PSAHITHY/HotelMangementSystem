import { fetchDepartment, fetchDepartments, saveDepartment } from "../../services/DepartmentService";
import { DEPARTMENT_ADD, DEPARTMENT_ALL, DEPARTMENT_BYID } from "./DepartmentConstants";

export function addDepartment(department)
{
    return(dispatch) =>{
        saveDepartment(department).then(
            resp =>{
                dispatch(addDepartmentSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function addDepartmentSuccess(data)
{
    return{
        type: DEPARTMENT_ADD,
        payload: data
    }
}
export function getDepartments()
{
    return(dispatch) =>{
        fetchDepartments().then(
            resp =>{
                dispatch(getDepartmentsSucces(resp.data))
            })
    }
}
export function getDepartmentsSucces(data)
{
    return{
        type: DEPARTMENT_ALL,
        payload: data
    }
}
export function getDepartmentById(id)
{
   return(dispatch) =>{
    fetchDepartment(id).then(
        resp =>{
            dispatch(getDepartmentByIdSuccess(resp.data))
        }
    )
    .catch(error =>{
        alert(error.response.data)
    })
   }
}
export function getDepartmentByIdSuccess(data)
{
    return{
        type: DEPARTMENT_BYID,
        payload: data
    }
}