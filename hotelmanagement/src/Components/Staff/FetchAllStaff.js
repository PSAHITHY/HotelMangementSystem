import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStaff } from "../../store/actions/StaffActions";
import { useEffect } from "react";
import img1 from "../../images/staff.jpg";
import { Link } from "react-router-dom";
function FetchAllStaff()
{
 const staffs=useSelector(state => state.staffReducer.staffs)
 const dispatch=useDispatch();
 const myFunction=() =>{
    dispatch(getAllStaff())
 };
 useEffect(() => {
    myFunction();
},[])
return(
    <div className="app-container">
            <div class="row">
                {
                    staffs.length > 0 &&
                    staffs.map((s, index) =>
                        <div key={index} className="col-sm-3">
                            <Link to={`/staff/find/${s.empId}`}>
                                <div className="card h-100" style={{ width: "150px", height: "150px" }}>
                                    <img className="card-img-top" src={img1} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">{s.empName}</h4>
                                        <div className="card-text">{s.empDptName}</div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    )

                }
                </div>
        </div>
)
}
export default FetchAllStaff;