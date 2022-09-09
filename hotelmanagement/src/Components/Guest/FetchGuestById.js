import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteGuest, getGuestById } from "../../store/actions/GuestActions";
import image1 from "../../images/guest.jpg"
import { Link } from "react-router-dom";
function FetchGuestById()
{
    const guest=useSelector(state => state.guestReducer.guest)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const{id}=useParams();
    const fetchGuestById=() =>{
        dispatch(getGuestById(id));
    }
    const deleteGuestDetails =() =>{
        let action =window.confirm("Are you sure! you want to delete this Guest ?")
        if(action)
        {
        dispatch(deleteGuest(id));
        alert("Guest deleted successfully");
        navigate(-1)
        }
    }
    useEffect(fetchGuestById,[id])
    return(
        <div>
        {
            guest!==null&&
            <div className="row">
                <div className="col">
                <img src={image1} alt="Card image" style={{height:"350px"}}/>
                </div>
                
                <div className="col">
                    <h2>Guest Details</h2>
                    <p>ID:{guest.guestId}</p>
                    <p>Name:{guest.guestName}</p>
                    <p>Mobile Number:{guest.guestMobile}</p>
                    <p>Email:{guest.guestEmail}</p>
                    <p>Gender:{guest.guestGender}</p>
                    <p>Address:{guest.guestAddress}</p>
                    <p>Adhar:{guest.guestGovtId}</p>
                    <Link to={`/guest/update/${guest.guestId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                    <button onClick={deleteGuestDetails} style={{ float: "middle" }} className="btn btn-danger">Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
        }
        <br></br><br></br><div>
                <Link to="/guest/all" className="btn btn-secondary">Back to list of Guests</Link>
            </div>
    </div>
 )
    
}
export default FetchGuestById;