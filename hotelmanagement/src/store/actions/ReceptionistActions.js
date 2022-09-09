import  { registerReceptionist } from "../../services/ReceptionistService"
import { loginReceptionist } from "../../services/ReceptionistService";
import { ADD_RECEPTIONIST, LOGIN_RECEPTIONIST } from "./ReservationConstants";

export function receptionistLogin(payload)
{
    return(dispatch) =>{
  loginReceptionist(payload).then(
    resp =>{
        if(resp.data.token)
                {
                    localStorage.setItem("myUser", JSON.stringify(resp.data));
                    dispatch(receptionistLoginSuccess(resp.data));

                }
                return resp.data
    }
  )
  .catch(error =>{
    alert(error.response.data)
  })
    }
}
export function receptionistLoginSuccess(data)
{
    return{
        type:LOGIN_RECEPTIONIST,
        payload:data
    }
}
export function receptionistAdd(receptionist)
{
  return(dispatch) =>{
    registerReceptionist(receptionist).then(
      resp =>{
        dispatch(receptionistAddSuccess(resp.data))
      }
    )
    .catch(error =>{
      alert(error.response.data)
    })
  }
}
export function receptionistAddSuccess(data)
{
  return{
    type:ADD_RECEPTIONIST,
    payload:data
  }
}