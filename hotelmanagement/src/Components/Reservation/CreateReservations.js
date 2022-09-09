import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReservation } from "../../store/actions/ReservationActions";
import { Link, useNavigate } from "react-router-dom";
import { makeReservation } from "../../services/ReservationService";
function CreateReservation()
{
  const newReservation=useSelector(state => state.reservationReducer.newReservation)
  const foundRooms=useSelector(state => state.roomReducer.foundRooms)
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [formErrors, setFormErrors]=useState({});
//   for(let i=0; i<foundRooms.length; i++)
//   {
  
//   }
const [roomNo, setRoomNo]=useState(foundRooms[0].roomNo);
  const [inDate, setInDate]=useState("");
  const [outDate, setOutDate]=useState("");
  const [adults, setAdults]=useState("");
  const [childern, setChildren]=useState("");
  const [nights, setNights]=useState("");
  const disablePast = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth()+1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}
const disablePast1 = () => {
    const today = new Date();
    const dd = String(today.getDate()+1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
}
  const handleSubmit = () =>{
     let error ={};
     if(!roomNo)
     {
        error['roomNoError'] ="Please Enter Room Number"
     }
     if(!inDate)
     {
        error['inDateError']=" Please Enter check-in Date"
     }
     if(!outDate)
     {
        error['outDateError']="Please Enter Check-out date"
     }
     if(!adults)
     {
        error['adultsError']="Please Enter No of adults"
     }
     else if(adults<0 || adults>2)
     {
        error['adultsError']="Please Enter valid No of adults"
     }
     if(!childern)
     {
        error['childrenError']=" Please Enter No of children"
     }
     if(!nights)
     {
        error['nightError']="Please Enter No of nights"
     }
     else if(!nights===Math.ceil(Math.abs(outDate-inDate)/(1000 * 60 * 60 * 24)))
     {
        error['nightError']="Please Enter Valid No of nights"
     }
    
     
     setFormErrors(error);
     const noError = Object.keys(error).length === 0;
     if(noError)
     {
        const payload={
           roomNo:roomNo,
           numberOfChildren: childern,
           numberOfAdults: adults,
           checkInDate: inDate,
           checkOutDate: outDate,
           numberOfNights: nights
        }
        dispatch(addReservation(payload));
        // if(newReservation!==null)
        // {
        //     alert("Reservation Done")
        // }
     }
  }
  return(
    <div className='reservationAdd' align="center">
        <div className='addReservationContainer col-sm-4 row-top-vertical'>
        <h2> Reservation Form</h2>
   {
    newReservation!==null &&
    alert("Booking Done")
   }
      <div className="form-group">
    <label htmlFor='roomNo'>Room No</label>
            {
                formErrors.roomNoError &&
                <div style={{ color: 'red' }}>{formErrors.roomNoError}</div>
            }
            <input type="text" className="form-control" name="roomNo" required value={roomNo} onChange={v => setRoomNo(v.target.value)} />
   
    </div>
    <div className="form-group">
    <label htmlFor='adults'>Number Of Adults</label>
            {
                formErrors.adultsError &&
                <div style={{ color: 'red' }}>{formErrors.adultsError}</div>
            }
            <input type="text" className="form-control" name="adults" required value={adults} onChange={v => setAdults(v.target.value)} />
            
    </div>
    <div className="form-group">
    <label htmlFor='children'>Number Of Children</label>
            {
                formErrors.childrenError &&
                <div style={{ color: 'red' }}>{formErrors.childrenError}</div>
            }
            <input type="text" className="form-control" name="children" required value={childern} onChange={v => setChildren(v.target.value)} />
    </div>
    <div className="form-group">
    <label htmlFor='inDate'>Check_in Date</label>
            {
                formErrors.inDateError &&
                <div style={{ color: 'red' }}>{formErrors.inDateError}</div>
            }
            <input type="date" className="form-control" name="inDate" required value={inDate} onChange={v => setInDate(v.target.value)} min={disablePast()}/>
    </div>
    <div className="form-group">
    <label htmlFor='inDate'>Check_out Date</label>
            {
                formErrors.outDateError &&
                <div style={{ color: 'red' }}>{formErrors.outDateError}</div>
            }
            <input type="date" className="form-control" name="outDate" required value={outDate} onChange={v => setOutDate(v.target.value) } min={disablePast1()}/>
    </div>
    <div className="form-group">
    <label htmlFor='nights'>Number Of Nights</label>
            {
                formErrors.nightsError &&
                <div style={{ color: 'red' }}>{formErrors.nightsError}</div>
            }
            <input type="text" className="form-control" name="nights" required value={nights} onChange={v => setNights(v.target.value)} />
    </div>
    <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Book</button>
                </div>
                <br></br>
                <div>
                {/* <Link to="/receptionist/dashboard" className="btn btn-secondary">Back</Link> */}
                <Link to="/payment"  className="btn btn-secondary">Procedd For Payment</Link>
            </div>

        </div>
    </div>
  )
}
export default CreateReservation;