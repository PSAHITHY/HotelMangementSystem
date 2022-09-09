import React from "react";
import { Link } from "react-router-dom";
import img3 from '../../images/manager.jpg'
import img2 from '../../images/hotelstaff.jpg'
import img1 from '../../images/hotelroom.jpg'
import img4 from '../../images/inventory.jpg'
import { useSelector } from "react-redux";

function ManagerDashboard()
{
    const loggedInManager=useSelector(state => state.managerReducer.loggedInManager)
    const manager=localStorage.getItem("myUser")
 return(
    <div>
        {
           loggedInManager!==null ?
<div className="managerDashboard">
    <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <Link className="navbar-brand" to="#" style={{ width: "80px", height: "60px" }} >
                <img src={img3} style={{ width: "58px", height: "50px" }} className="img-fluid" />
            </Link>
            <ul className="navbar-nav">
            <ul className="nav navbar-nav m1-auto">
                <Link class="navbar-brand" to="/receptionist/add">Add Receptionist</Link> </ul>
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/manager/logout">Logout</Link> </ul>
            </ul>
    </nav>
    <div >
            <br></br>
        <h2 align="center"> Welcome  {JSON.parse(manager).userName}</h2>
        <br></br>
    <div class="row" align="center">
    <div className="col-sm-4">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img2} style={{ width: "95%" }} />
                            <div className="card-body">
                                <h4 className="card-title">Staff</h4>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/staff/add"> Add</Link>
                                    <Link className="dropdown-item" to="/staff/all"> View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-sm-4">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img1} style={{ width: "95%" }} />
                            <div className="card-body">
                                <h4 className="card-title">Room</h4>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/room/add"> Add</Link>
                                    <Link className="dropdown-item" to="/room/all"> View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img4} style={{ width: "95%" }} />
                            <div className="card-body">
                                <h4 className="card-title">Inventory</h4>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/inventory/add"> Add</Link>
                                    <Link className="dropdown-item" to="/inventory/all"> View</Link>
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
export default ManagerDashboard;