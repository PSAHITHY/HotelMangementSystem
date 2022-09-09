import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function ListOfRooms()
{
    const foundRooms=useSelector(state => state.roomReducer.foundRooms)
    return(
        <div>
            {
        foundRooms.length > 0 &&
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
                            
                            <td><Link to={`/guest/add`} className="btn btn-primary">Add Guest</Link></td>&nbsp;&nbsp;
                            <td><Link to={`/reservation/add`} className="btn btn-primary">Book Room</Link></td> 
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
export default ListOfRooms;