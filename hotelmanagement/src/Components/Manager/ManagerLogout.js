import React from "react";
import { useEffect } from "react";
import swal from 'sweetalert'
function ManagerLogout()
{
 const loggedInManager=localStorage.getItem("myUser")
 useEffect(() =>{
    if(loggedInManager!==null)
    {
        localStorage.setItem("myUser",JSON.stringify({}));
        swal("Logged Out Successfully").then(function() {
         window.location.href="/"
     });
        
    }
 })
 return(
    <div>

    </div>
 )
}
export default ManagerLogout;