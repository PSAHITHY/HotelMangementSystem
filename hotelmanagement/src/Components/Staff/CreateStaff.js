import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStaff } from '../../store/actions/StaffActions';
function CreateStaff()
{
    const[eName, setEName]=useState("");
    const[eMobile, setEMobile]=useState("");
    const[eEmail, setEEmail]=useState("");
    const[eGender,setEGender]=useState("");
    const[eDepart,setEDepart]=useState("");
    const[eSalary,setESalary]=useState("");
    const[formErrors,setFormErrors]=useState({});
    const newStaff= useSelector(state => state.staffReducer.newStaff)
    const dispatch=useDispatch();
    const handleSubmit=() =>{
        let error={};
        if(!eName)
        {
            error['eNameError']="Please enter name"
        }
        if(!eMobile.match("^[6-9]{1}[0-9]{9}"))
        {
            error['eMobileError']="Please enter valid Mobile Number"
        }
        if(!eEmail)
        {
            error['eEmailError']=" Please enter Email"
        }
        if(!eGender)
        {
            error['eGenderError']=" Please select Gender"
        }
        if(!eDepart)
        {
            error['eDepartError']=" Please Select Department"
        }
        if(!eSalary)
        {
            error['eSalaryError']=" Please Enter Salary"
        }
        else if(eSalary<0)
        {
            error['eSalaryError']="Please enter valid salary"
        }

        setFormErrors(error);
        const noError=Object.keys(error).length===0;
        if(noError)
        {
            const payload ={
                empName:eName,
                empPhone:eMobile,
                empEmail:eEmail,
                empGender:eGender,
                empDptName:eDepart,
                empSalary:eSalary
            }
            dispatch(addStaff(payload));
        }
    }
    return(
        <div className='staffAdd' align="center">
            <div className='addStaffContainer col-sm-5 row-top-vertical'>
                <h2>Staff Registration Form</h2>
                {
                    newStaff!==null&&
                    alert("Staff added successfully")
                }
            <div className="form-group">
           <label htmlFor='eName'>Name</label>
            {
                formErrors.eNameError &&
                <div style={{ color: 'red' }}>{formErrors.eNameError}</div>
            }
            <input type="text" className="form-control" name="eName" required value={eName} onChange={v => setEName(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='eMobile'>Mobile Number</label>
            {
                formErrors.eMobileError &&
                <div style={{ color: 'red' }}>{formErrors.eMobileError}</div>
            }
            <input type="text" className="form-control" name="eMobile" required value={eMobile} onChange={v => setEMobile(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='eEmail'>Email</label>
            {
                formErrors.eEmailError &&
                <div style={{ color: 'red' }}>{formErrors.eEmailError}</div>
            }
            <input type="text" className="form-control" name="eEmail" required value={eEmail} onChange={v => setEEmail(v.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor='eGender'>Gender</label>
                    {
                        formErrors.eGenderError &&
                        <div style={{ color: 'red' }}>{formErrors.eGenderError}</div>
                    }
                    <select type="Gender" className="form-control" name="eGender" required value={eGender} onChange={v => setEGender(v.target.value)} >
                        <option value="">----Select Gender-------</option>
                        <option value="MALE">MALE</option>
                        <option value="FEMALE">FEMALE</option>
                        </select>
            </div>
            <div className="form-group">
            <label htmlFor='eDepart'>Department Name</label>
                    {
                        formErrors.eDepartError &&
                        <div style={{ color: 'red' }}>{formErrors.eDepartError}</div>
                    }
                    <select type="eDepart" className="form-control" name="eDepart" required value={eDepart} onChange={v => setEDepart(v.target.value)} >
                        <option value="">----Select Department Name-------</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Room Service">Room Service</option>
                        <option value="Security">Security</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Front Desk">Front Desk</option>
                    </select>
            </div>
            <div className="form-group">
           <label htmlFor='eSalary'>Salary</label>
            {
                formErrors.eSalaryError &&
                <div style={{ color: 'red' }}>{formErrors.eSalaryError}</div>
            }
            <input type="text" className="form-control" name="eSalary" required value={eSalary} onChange={v => setESalary(v.target.value)} />
            </div>
            <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>

            </div>

        </div>
    )
}
export default CreateStaff;