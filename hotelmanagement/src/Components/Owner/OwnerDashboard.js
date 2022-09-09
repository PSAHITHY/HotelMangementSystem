import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../images/owner.jpg';
import img2 from '../../images/department.jpg';
import img1 from '../../images/hotelstaff.jpg';
import img4 from '../../images/hotelroom.jpg';
import img5 from '../../images/inventory.jpg';
import img6 from '../../images/guest1.jpg';
import img7 from '../../images/reservation.jpg'
import { useSelector } from 'react-redux';
function OwnerDashboard()
{
    const loggedInAdmin=useSelector(state => state.adminReducer.loggedInAdmin)
    const owner = localStorage.getItem("myUser")
return(
    <div>
        {
            loggedInAdmin!==null ?
    <div className='ownerdashboard'>
        <nav class="navbar navbar-expand-lg navbar-dark bg-warning">
        <Link className="navbar-brand" to="#" style={{ width: "80px", height: "60px" }} >
                <img src={img3} style={{ width: "58px", height: "50px" }} className="img-fluid" />
            </Link>
            <ul className="navbar-nav">
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/manager/add">Add Manager</Link> </ul>
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/owner/logout">Logout</Link> </ul>
                    </ul>
                    </nav>
        <div >
            <br></br>
        <h2 align="center"> Welcome {JSON.parse(owner).userName}</h2>
        <br></br>
        <div class="row" align="center" paddingtop="5rem">
        <div className="col-sm-3">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img2} style={{ width: "95%" }} />
                            <div className="card-body">
                                {/* <h4 className="card-title">Department</h4> */}
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/department/add"> Add</Link>
                                    <Link className="dropdown-item" to="/department/all"> View</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img1} style={{ width: "95%" }} />
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
                     <div className="col-sm-3">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img4} style={{ width: "95%" }} />
                            <div className="card-body">
                                <h4 className="card-title">Room</h4>
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                </button>
                                <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/room/add"> Add</Link>
                                    <Link className="dropdown-item" to="/room/all"> View</Link>
                                    <Link className="dropdown-item" to="/room/search">SearchRooms</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="col-sm-3">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img5} style={{ width: "95%" }} />
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
                    <div className="col-sm-3">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img6} style={{ width: "95%" }} />
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
                     <div className="col-sm-3">
                        <div className="card" style={{ width: "200px" }}>
                            <img className="card-img-top h-100" src={img7} style={{ width: "95%" }} />
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
export default OwnerDashboard;