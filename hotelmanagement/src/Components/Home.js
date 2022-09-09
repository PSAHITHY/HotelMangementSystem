import React from "react";

import NavBar from "./NavBar";

function Home() {

    return (
        <div className="homescreen"><NavBar />
        <br></br>
        <div >
                <div className="text"><h2 align="center" className="thicker">Welcome to Hotel</h2>
                </div>
                {/* <div className="caption"><h6><em>    ....responds to your life!</em></h6></div> */}
            </div>
            {/* <div><h1>AIM</h1></div>
            <div className="caption1">
                <p>Online Hotel Management System is designed for Owner, Manager and Receptionist. 
                   Manager can have access to add staff, Rooms and inventory details. Receptionist can handle guest
                   details and can book rooms.</p>
            </div> */}
        </div>
    )
}
export default Home;