import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllAvailable } from '../../store/actions/RoomActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
function FetchAllAvailableRooms()
{
 const availableRooms=useSelector(state => state.roomReducer.availableRooms)
 const dispatch=useDispatch();
 const myFunction = () => {
    dispatch(getAllAvailable())
};
useEffect(() => {
    myFunction();
}, [])
return(
    <div className='roomsAvailable'>
             {
        availableRooms.length > 0 &&
        <table className="table table-striped">
            <thead>
        <tr>
            <th>S.No</th>
            <th>RoomId</th>
            <th>RoomNo</th>
            <th>Room Type</th>
            <th>Room Desc</th>
            <th>Room Price</th>
       </tr>
       </thead>
       <tbody>
       {
                    availableRooms.map((r, index) =>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{r.roomId} </td>
                            <td>{r.roomNo}</td>
                            <td>{r.roomType} </td>
                            <td>{r.roomDesc}</td>
                            <td>{r.roomPrice}</td>
                            
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
)
}
export default FetchAllAvailableRooms;