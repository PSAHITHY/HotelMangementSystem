import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkOut } from "../../store/actions/RoomActions";
import { Link } from "react-router-dom";
function RoomCheckOut()
{
   const [roomNo, setRoomNo]=useState("");
   const dispatch=useDispatch();
   const navigate=useNavigate();
    

   const checkRoom = () =>{
    let action =window.confirm("Are you sure! you want to check out this room ?")
    if(action){
    dispatch(checkOut(roomNo))
    alert("checked out")
    navigate(-1)
    }
   }
   return(
    <div className="checkOut" align="center">
        <div className='addRoomContainer col-sm-3 row-top-vertical'>
        <div className="form-group">
            <label htmlFor='roomNo'>RoomNo</label>
                    
                    <input type="text" className="form-control" name="roomNo" required value={roomNo} onChange={v => setRoomNo(v.target.value)} />
            </div>
            <div>
                    <button onClick={checkRoom} className="btn btn-primary">CheckOut</button>
                </div>
                <br></br><br></br><div>
                <Link to="/receptionist/dashboard" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    </div>
   )
}
export default RoomCheckOut;