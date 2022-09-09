import { managerLogin, managerRegister } from "../../services/ManagerService"
import { MANAGER_ADD, MANAGER_LOGIN } from "./StaffConstants";

export function loginManager(payload)
{
    return(dispatch) =>{
        managerLogin(payload).then(
            resp =>{
                if(resp.data.token)
                {
                    localStorage.setItem("myUser", JSON.stringify(resp.data));
                    dispatch(loginManagerSuccess(resp.data));

                }
                return resp.data
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function loginManagerSuccess(data)
{
    return{
        type: MANAGER_LOGIN,
        payload: data
    }
}
export function managerAdd(manager)
{
    return(dispatch) =>{
        managerRegister(manager).then(
            resp =>{
                dispatch(managerAddSuccess(resp.data))
            }
        )
        .catch(error =>{
            alert(error.response.data)
        })
    }
}
export function managerAddSuccess(data)
{
    return{
        type:MANAGER_ADD,
        payload: data
    }
}
