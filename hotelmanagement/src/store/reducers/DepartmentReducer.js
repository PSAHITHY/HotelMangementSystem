import { DEPARTMENT_ADD, DEPARTMENT_ALL, DEPARTMENT_BYID, DEPARTMENT_UPDATE } from "../actions/DepartmentConstants"

const initialState={
    department: null,
    departments:[],
    newDepartment: null,
    deleteDepartment: null,
    updatedDepartment: null
}
export default function departmentReducer(state=initialState,action)
{
    if(action.type===DEPARTMENT_ADD)
    {
        return({
               ...state,
               newDepartment:action.payload
        })
    }
    if(action.type===DEPARTMENT_BYID)
    {
        return({
            ...state,
            department:action.payload
        })
    }
    if(action.type===DEPARTMENT_ALL)
    {
        return({
            ...state,
            departments: action.payload
        })
    }
    if(action.type===DEPARTMENT_UPDATE)
    {
        return({
            ...state,
            updatedDepartment: action.payload
        })
    }
    else{
        return state;
    }
}