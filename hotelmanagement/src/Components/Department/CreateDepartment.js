import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDepartment } from '../../store/actions/DepartmentActions';

function CreateDepartment()
{
    const newDepartment=useSelector(state => state.departmentReducer.newDepartment)
    const [dName, setDName]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const dispatch=useDispatch();
    const handleSubmit =() =>{
        let error={};
        if(!dName)
        {
            error['dNameError']="Please enter Department name"
        }
        setFormErrors(error);
        const noError = Object.keys(error).length === 0;
        if(noError)
        {
            const payload={
                departmentName:dName
            }
            dispatch(addDepartment(payload));
            
        }
    }
    return(
          <div className='addDepartment' align="center">
            <div className='addDepartmentContainer col-sm-4 row-top-vertical'>
             <h2>Department form</h2>
             {
                newDepartment!==null &&
                alert("Department added successfully")
             }
             <div className="form-group">
    <label htmlFor='iName'>Department Name</label>
            {
                formErrors.dNameError &&
                <div style={{ color: 'red' }}>{formErrors.dNameError}</div>
            }
            <input type="text" className="form-control" name="dName" required value={dName} onChange={v => setDName(v.target.value)} />
    </div>
    <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
            </div>

          </div>
    )
}
export default CreateDepartment;