import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
function ReceptionistLogout()
{
 const loggedIn= localStorage.getItem("myUser");
 useEffect(() =>{
    if(loggedIn!==null)
    {
        localStorage.setItem("myUser",JSON.stringify({}));
        swal("Logged Out Successfully").then(function() {
         window.location.href="/"
        })
    }
 })
 return(
    <div>

    </div>
 )
}
export default ReceptionistLogout;