import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDepartments } from "../../store/actions/DepartmentActions";
import img1 from "../../images/department.jpg";
function FetchDepartments()
{
    const departments=useSelector(state => state.departmentReducer.departments)
    const dispatch=useDispatch();
    const myFunction=() =>{
        dispatch(getDepartments())
    };
    useEffect(() => {
        myFunction();
    },[])
    return(
        <div className="app-container">
            <div class="row">
                {
                    departments.length > 0 &&
                    departments.map((i, index) =>
                        <div key={index} className="col-sm-3">
                            {/* <Link to={`/department/find/${i.departmentId}`}> */}
                                <div className="card h-100" style={{ width: "150px", height: "150px" }}>
                                    <img className="card-img-top" src={img1} alt="Card image" />
                                    <div className="card-body">
                                        <h4 className="card-title">{i.departmentName}</h4>
                                    </div>
                                </div>
                            {/* </Link> */}

                        </div>

                    )

                }
                </div>
        </div>
    )
}
export default FetchDepartments;