import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../../src/images/Hotel.jpg'
function NavBar() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg  navbar-dark bg-success" >
            <Link className="navbar-brand" to="#" style={{ width: "80px", height: "60px" }} >
            <img src={img3} style={{ width: "58px", height: "50px" }} className="img-fluid" />
            </Link>
            <ul className="navbar-nav">
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/owner/login">Owner</Link> 
            </ul>
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/manager/login">Manager</Link>
             </ul>
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/receptionist/login">Receptionist</Link>
             </ul>
            <ul className="nav navbar-nav ml-auto">
                    <Link class="navbar-brand" to="/aboutus">Aboutus</Link>
             </ul>
             </ul>
                    

           
        </nav>
        </div>
    )
}
export default NavBar;
