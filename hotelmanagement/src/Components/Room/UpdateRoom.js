import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateRoom } from "../../store/actions/RoomActions";
import { useDispatch } from "react-redux";
function UpdateRoom()
{
    const room=useSelector(state => state.roomReducer.room)
    const [roomId, setRoomId]=useState(room.roomId);
    const [roomNo, setRoomNo]=useState(room.roomNo);
    const [roomType, setRoomType]=useState(room.roomType);
    const[roomDesc, setRoomDesc]=useState(room.roomDesc);
    const[roomPrice, setRoomPrice]=useState(room.roomPrice);
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const handleSubmit=() =>{
        const payload={
                roomId:roomId,
                roomNo: roomNo,
                roomType: roomType,
                roomDesc: roomDesc,
                roomPrice: roomPrice,
                
        }
        dispatch(updateRoom(payload));
        alert("Room updated Successfully");
        navigate(-1)
    }
    return(
        <div className='roomUpdate' align="center">
             <div className='addRoomContainer col-sm-4 row-top-vertical'>
             <div className="form-group">
                <label htmlFor='roomId'>Id</label>
                <input type="text" className="form-control" name="roomId" value={roomId} disabled/>
            </div>
            <div className="form-group">
                <label htmlFor='roomNo'>RoomNo</label>
                <input type="text" className="form-control" name="roomNo" value={roomNo} disabled/>
            </div>
            <div className="form-group">
                <label htmlFor='roomType'>Room Type</label>
                <input type="text" className="form-control" name="roomType" value={roomType} disabled/>
            </div>
            <div className="form-group">
                <label htmlFor='roomDesc'>RoomDesc</label>
                <select type="roomDesc" className="form-control" name="roomDesc" required value={roomDesc} onChange={v => setRoomDesc(v.target.value)}>
                    <option value="">----Select RoomDesc------</option>
                    <option value="AC">AC</option>
                    <option value="NONAC">NONAC</option>
                </select>
                </div>
                <div className="form-group">
            <label htmlFor='roomPrice'>RoomPrice</label>
            <input type="text" className="form-control" name="roomPrice" required value={roomPrice} onChange={v => setRoomPrice(v.target.value)} />
                    </div>
                    <div>
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
            </div>
            </div>
    )
}
export default UpdateRoom;