import React from 'react';
import { Link, useParams } from 'react-router-dom';
import img3 from '../../images/receptionist.jpg'
import img2 from '../../images/guest1.jpg'
import img1 from '../../images/reservation.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { checkOut } from '../../store/actions/RoomActions';
function ReceptionistHome()
{
    const loggedIn = useSelector(state => state.receptionistReducer.loggedIn)
    const receptionist=localStorage.getItem("myUser")
    const dispatch=useDispatch();
    
  return(
    <div>
        {
            loggedIn !== null ?
    <div className="receptionistdashboard">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="#" style={{ width: "80px", height: "60px" }} >
                <img src={img3} style={{ width: "58px", height: "50px" }} className="img-fluid" />
            </Link>
            
            <ul className="navbar-nav">
            <ul className="nav navbar-nav m1-auto">
                <Link class="navbar-brand" to="/room/available">Rooms Available</Link> </ul>
            <ul className="nav navbar-nav m1-auto">
                <Link class="navbar-brand" to="/room/checkout">CheckOut</Link> </ul>
          
            <ul className="nav navbar-nav m1-auto">
                <Link class="navbar-brand" to="/room/search">Search</Link> </ul>
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/receptionist/logout">Logout</Link> </ul>
           
             </ul>
               
             </nav>
            <div >
            <br></br>
        <h2 align="center"> Welcome  {JSON.parse(receptionist).userName}</h2>
        <br></br>
        <div class="row" align="center">
        <div className="col-sm-6">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img2} style={{ width: "95%" }} />
                            <div className="card-body">
                                <h4 className="card-title">Guest</h4>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/guest/all"> View</Link>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="col-sm-6">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img1} style={{ width: "95%" }} />
                            <div className="card-body">
                                <h4 className="card-title">Reservations</h4>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/reservation/all"> View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
        </div>
        :
        <h2 class="text-danger">Please Login</h2>
}
        </div>
  )
}
export default ReceptionistHome;