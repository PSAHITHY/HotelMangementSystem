import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRoom } from '../../store/actions/RoomActions';
import swal from 'sweetalert';

function CreateRoom()
{
 const [roomNo, setRoomNo]=useState("");
 const [roomType, setRoomType]=useState("");
 const[roomDesc, setRoomDesc]=useState("");
 const[roomPrice, setRoomPrice]=useState("");
 const[roomAvail, setRoomAvail]=useState("True");
 const [formErrors, setFormErrors] = useState({})
 const newRoom = useSelector(state => state.roomReducer.newRoom)
 const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = () => {
        let error = {};
        if(!roomNo)
        {
            error['roomNoError'] = "Please enter Room number"
        }
        else if(roomNo<100 || roomNo>1000)
        {
            error['roomNoError'] =" Please enter valid Room number"
        }
        if(!roomType)
        {
            error['roomTypeError']=" Please enter Room Type"
        }
        if(!roomDesc)
        {
            error['roomDescError']=" Please enter Room Desc"
        }
        if(!roomPrice)
        {
            error['roomPriceError']=" Please enter Room Price"
        }
        if(roomPrice <700)
        {
            error['roomPriceError']=" Please enter Valid Room Price"
        }
        setFormErrors(error);
        const noError = Object.keys(error).length === 0;
        if (noError) {
            const payload = {
                roomNo: roomNo,
                roomType: roomType,
                roomDesc: roomDesc,
                roomPrice: roomPrice,
                roomAvail: roomAvail
            }
            dispatch(addRoom(payload));
            if(newRoom!==null)
            {
                alert("Room Added sucessfully")
                navigate(-1)
            }
        }
    }
    return(
        <div className='roomAdd' align="center">
            <div className='addRoomContainer col-sm-4 row-top-vertical'>
            <h2> Room Form</h2>
             
            <div className="form-group">
            <label htmlFor='roomNo'>RoomNo</label>
                    {
                        formErrors.roomNoError &&
                        <div style={{ color: 'red' }}>{formErrors.roomNoError}</div>
                    }
                    <input type="text" className="form-control" name="roomNo" required value={roomNo} onChange={v => setRoomNo(v.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor='roomType'>RoomType</label>
                    {
                        formErrors.roomTypeError &&
                        <div style={{ color: 'red' }}>{formErrors.roomTypeError}</div>
                    }
                    <select type="roomType" className="form-control" name="roomType" required value={roomType} onChange={v => setRoomType(v.target.value)} >
                    <option value="">----Select RoomType-------</option>
                    <option value="SingleBed">SingleBed</option>
                    <option value="DoubleBed">DoubleBed</option>
                    </select>
            </div>
            <div className="form-group">
                <label htmlFor='roomDesc'>RoomDesc</label>
                {
                     formErrors.roomDescError &&
                     <div style={{ color: 'red' }}>{formErrors.roomDescError}</div>
                }
                <select type="roomDesc" className="form-control" name="roomDesc" required value={roomDesc} onChange={v => setRoomDesc(v.target.value)}>
                    <option value="">----Select RoomDesc------</option>
                    <option value="AC">AC</option>
                    <option value="NONAC">NONAC</option>
                </select>
            </div>
            <div className="form-group">
            <label htmlFor='roomPrice'>RoomPrice</label>
                    {
                        formErrors.roomNoError &&
                        <div style={{ color: 'red' }}>{formErrors.roomPriceError}</div>
                    }
                    <input type="text" className="form-control" name="roomPrice" required value={roomPrice} onChange={v => setRoomPrice(v.target.value)} />
            </div>
            {/* <div className="form-group">
            <label htmlFor='roomAvail'>RoomAvail</label>
                    {
                        formErrors.roomNoError &&
                        <div style={{ color: 'red' }}>{formErrors.roomAvailError}</div>
                    }
                    <select type="roomAvail" className="form-control" name="roomAvail" required value={roomAvail} onChange={v => setRoomAvail(v.target.value)} >
                        <option value="">----Select RoomStatus-------</option>
                        <option value="true">TRUE</option>
                        <option value="false">FALSE</option>
                        </select>
            </div> */}
            {/* {
                newRoom !==null &&
                swal("room added successfully")
                .then(function() {
                    window.location.href = "/manager/dashboard";}
              )} */}
            <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
                
            </div>

        </div>
    )

}
export default CreateRoom;