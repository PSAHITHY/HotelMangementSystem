import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import room1 from "../../images/room.jpg";
import { Link } from "react-router-dom";
import { deleteRoomById, getRoomById } from "../../store/actions/RoomActions";

function FetchRoomById()
{
const room=useSelector(state => state.roomReducer.room)
const {id}=useParams();
const dispatch=useDispatch();
const navigate=useNavigate();
const fetchRoomById =() =>{
    dispatch(getRoomById(id));
}
useEffect(fetchRoomById,[id]);


const deleteRoomDetails = () => {
  let action =window.confirm("Are you sure! you want to delete this room ?")

   if(action)
   {
        dispatch(deleteRoomById(id));
        alert("Room deleted successfully");
        navigate(-1)
   }
  

}

return(
    <div>
            {
                room != null &&
                <div className="row">
                    <div className="col">
                        <img src={room1} alt="Card image" style={{height:"350px"}}/>
                    </div>
                    <div className="col">
                        <h2>Vehicle Details</h2>
                        <p>ID : {room.roomId}</p>
                        <p>No : {room.roomNo}</p>
                        <p>Type : {room.roomType}</p>
                        <p>Desc : {room.roomDesc}</p>
                        <p>Price : {room.roomPrice}</p>
                        <Link to={`/room/update/${room.roomId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                        <button onClick={deleteRoomDetails} style={{ float: "middle" }} className="btn btn-danger">Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>

                </div>

            }
            <br></br><br></br><div>
                <Link to="/room/all" className="btn btn-secondary">Back to list of Rooms</Link>
            </div>
           
        </div>
)
}
export default FetchRoomById;