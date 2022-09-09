import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReservations } from "../../store/actions/ReservationActions";
import { Link } from "react-router-dom";
function FetchAllReservations()
{
    const reservations=useSelector(state => state.reservationReducer.reservations)
    const dispatch=useDispatch();
    const myFunction =() =>{
        dispatch(getAllReservations())
    };
    useEffect(() => {
        myFunction();
    },[])
    return(
        <div>
        <h2> Reservations</h2>
        {
    reservations.length > 0 ?
        <table className="table table-hover">
            <thead>
            <tr>
                <th>reservationId</th>
                <th>RoomNo</th>
                <th>Number Of Adults</th>
                <th>Number Of Childrens</th>
                <th>Check-in Date</th>
                <th>Check-out Date</th>
                <th>Number Of Nights</th>
                
            </tr>
            </thead>
            <tbody>
            {
                reservations.map((r, index) =>
                    <tr key={index}>
                        <td>{r.reservationId} </td>
                        <td>{r.roomNo}</td>
                        <td>{r.numberOfAdults} </td>
                        <td>{r.numberOfChildren}</td>
                        <td>{r.checkInDate}</td>
                        <td>{r.checkOutDate}</td>
                        <td>{r.numberOfNights}</td>
                    </tr>
                )
            }
            </tbody>
        </table>
        : <h3>No Reservations</h3>
}
<br></br><br></br><div>
                <Link to="/receptionist/dashboard" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )
}
export default FetchAllReservations;