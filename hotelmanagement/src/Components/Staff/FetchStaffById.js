import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getStaff } from "../../store/actions/StaffActions";
import image1 from "../../images/staff.jpg";
import { deleteStaffById } from "../../store/actions/StaffActions";
import { Link } from "react-router-dom";

function FetchStaffById()
{
 const staff=useSelector(state => state.staffReducer.staff)
 const{id}=useParams();
 const navigate=useNavigate();
 const dispatch=useDispatch();

 const fetchStaffById=() =>{
    dispatch(getStaff(id));
 }
 const deleteStaffDetails =() =>{
    let action =window.confirm("Are you sure! you want to delete this staff ?")
    if(action){
    dispatch(deleteStaffById(id));
    alert("Staff delete successfully");
    navigate(-1)
    }
}
 useEffect(fetchStaffById,[id]);
 return(
    <div>
        {
            staff!==null&&
            <div className="row">
                <div className="col">
                <img src={image1} alt="Card image" style={{height:"350px"}}/>
                </div>
                
                <div className="col">
                    <h2>Staff Details</h2>
                    <p>ID:{staff.empId}</p>
                    <p>Name:{staff.empName}</p>
                    <p>Mobile Number:{staff.empPhone}</p>
                    <p>Email:{staff.empEmail}</p>
                    <p>Gender:{staff.empGender}</p>
                    <p>Department Name:{staff.empDptName}</p>
                    <p>Salary:{staff.empSalary}</p>
                    <Link to={`/staff/update/${staff.empId}`} className="btn btn-secondary">Edit</Link> &nbsp;&nbsp;
                    <button onClick={deleteStaffDetails} style={{ float: "middle" }} className="btn btn-danger">Delete</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>
        }
        <br></br><br></br><div>
                <Link to="/staff/all" className="btn btn-secondary">Back to list of Staff</Link>
            </div>
    </div>
 )
}
export default FetchStaffById;