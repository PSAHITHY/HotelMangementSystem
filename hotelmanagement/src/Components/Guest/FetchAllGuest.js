import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGuest } from "../../store/actions/GuestActions";
import img1 from "../../images/guest.jpg"
import { useEffect } from "react";
import { Link } from "react-router-dom";
function FetchAllGuest()
{
    const guests=useSelector(state => state.guestReducer.guests)
    const dispatch=useDispatch();
    const myFunction=() =>{
        dispatch(getAllGuest())
    };
    useEffect(() => {
        myFunction();
    },[])
    return(
        <div className="app-container">
            <div class="row">
                {
                    guests.length > 0 &&
                    guests.map((g, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`/guest/find/${g.guestId}`}>
                                <div className="card h-100" style={{ width: "150px", height: "150px" }}>
                                    <img className="card-img-top" src={img1} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">{g.guestName}</h4>
                                        
                                    </div>
                                </div>
                            </Link>

                        </div>

                    )

                }
                </div>
                <br></br><br></br><div>
                <Link to="/receptionist/dashboard" className="btn btn-secondary">Back</Link>
            </div>
        </div>
    )

}
export default FetchAllGuest;