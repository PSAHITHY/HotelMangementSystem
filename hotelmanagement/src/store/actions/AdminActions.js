import { adminLogin } from "../../services/AdminService"
import { ADMIN_LOGIN } from "./AdminConstants"

export function loginAdmin(payload)
{
    return(dispatch) =>{
        adminLogin(payload).then(
            resp =>{
                if(resp.data.token)
                {
                    localStorage.setItem("myUser", JSON.stringify(resp.data));
                    dispatch(loginAdminSuccess(resp.data));
                  

                }

                return resp.data;
            }
        )
      .catch(error =>{
        alert(error.response.data)
      })
           
    }
}
export function loginAdminSuccess(data)
{
    return{
        type:ADMIN_LOGIN,
        payload: data
    }
}

