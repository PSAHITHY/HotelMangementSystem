import React from "react";
import { useEffect } from "react";
import swal from 'sweetalert';
function OwnerLogout()
{
    const loggedInOwner=localStorage.getItem("myUser");
    useEffect(() =>{
        if(loggedInOwner!==null)
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
export default OwnerLogout;