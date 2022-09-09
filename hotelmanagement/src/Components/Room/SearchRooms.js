import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchRoomByType } from "../../store/actions/RoomActions";
import { useDispatch, useSelector } from "react-redux";
import room from "../../images/room.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function SearchRooms()
{
    const[roomType, setRoomType]=useState("");
    const[roomDesc, setRoomDesc]=useState("");
    // const {roomType}=useParams();
    // const {roomDesc}=useParams();
    // const {roomType,roomDesc}=useParams();
    // const params={type : roomType, desc:roomDesc}

    const [formErrors, setFormErrors] = useState({})
    const foundRooms=useSelector(state => state.roomReducer.foundRooms)
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    // const handleSubmit = () => {
       
    //     if (noError) {
    //        const roomSearch =() =>{
    //         dispatch(searchRoomByType(roomType,roomDesc));
    //     }
    //     UseEffect(roomSearch,[])
    // }
    const roomSearch =() =>{
        let error = {};
        if(!roomType)
        {
            error['roomTypeError']="Please enter Room Type"
        }
        if(!roomDesc)
        {
            error['roomDescError']="Please enter Room Desc"
        }
        setFormErrors(error);
        const noError = Object.keys(error).length === 0;
        if(noError)
        {
             dispatch(searchRoomByType(roomType,roomDesc))
             
        }
            
        }
        useEffect(() => {
            roomSearch();
        },[])
        
    
    return(
        <div className="searchRooms" align="center">
            <div>
                <div className='searchRoomContainer col-sm-4 row-top-vertical'>
                 <div className="form-group">
            <label htmlFor='roomType'>RoomType</label>
                    {
                        formErrors.roomTypeError &&
                        <div style={{ color: 'red' }}>{formErrors.roomTypeError}</div>
                        
                       
                    }
                    <select type="roomType" className="form-control" name="roomType" required value={roomType}  onChange={v => setRoomType(v.target.value)}>
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
                <select type="roomDesc" className="form-control" name="roomDesc" required value={roomDesc} onChange={v => setRoomDesc(v.target.value)}  >
                    <option value="">----Select RoomDesc------</option>
                    <option value="AC">AC</option>
                    <option value="NONAC">NONAC</option>
                </select>
            </div>
            <div>
                    <button onClick={roomSearch} className="btn btn-primary">Search</button>
                </div>

                <br></br>
                <br></br>
                {/* {
                    foundRooms.length >0 &&
                    navigate("/getRooms")
                } */}
                </div>
               
          {
            foundRooms.length>0 &&
            <table className="table table-striped">
                <thead>
            <tr>
                <th>RoomId</th>
                <th>RoomNo</th>
                <th>Room Type</th>
                <th>Room Desc</th>
                <th>Room Price</th>
           </tr>
           </thead>
           <tbody>
           {
                        foundRooms.map((r, index) =>
                            <tr key={index}>
                                <td>{r.roomId} </td>
                                <td>{r.roomNo}</td>
                                <td>{r.roomType} </td>
                                <td>{r.roomDesc}</td>
                                <td>{r.roomPrice}</td>
                                
                                <td><Link to={`/guest/add`}>Add Guest</Link></td>&nbsp;&nbsp;
                                <td><Link to={`/reservation/add`}>Book Room</Link></td> 
                            </tr>
                        )
                    }
                    </tbody>
            </table>
            
          }
          <br></br><br></br><div>
                <Link to="/receptionist/dashboard" className="btn btn-secondary">Back</Link>
            </div>
            
            </div>
        </div>
    )

        }

export default SearchRooms;