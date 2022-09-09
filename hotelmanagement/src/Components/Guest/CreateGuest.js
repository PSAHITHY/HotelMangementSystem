import React, { useState } from 'react';
import {useSelector, useDispatch } from "react-redux";
import { addGuest } from '../../store/actions/GuestActions';
import { Link } from 'react-router-dom';
function CreateGuest()
{
 const newGuest=useSelector(state => state.guestReducer.newGuest)
 const dispatch=useDispatch();
 const[formErrors,setFormErrors]=useState({});
 
 const [gName,setGName]=useState("");
 const [gPhone, setGPhone]=useState("");
 const [gEmail, setGEmail]=useState("");
 const [gGender,setGGender]=useState("");
 const [gAddress, setGAddress]=useState("");
 const [gGovtId, setGGovtId]=useState("");
 const handleSubmit =() =>{
    let error={};
   
    if(!gName)
    {
        error['gNameError']="Please enter Name"
    }
    if(!gPhone)
    {
        error['gPhoneError']="Please enter Mobile Number"
    }
    else if(!gPhone.match("^[6-9]{1}[0-9]{9}$"))
    {
        error['gPhoneError']="Please enter valid Mobile Number"
    }
    if(!gEmail)
    {
        error['gEmailError']=" Please enter Email"
    }
    else if(!gEmail.match("^[A-Za-z]*[0-9]*[@]{1}[a-z]*[.]{1}[a-z]*$"))
    {
        error['gEmailError']="Please enter valid Email"
    }
    if(!gGender)
    {
        error['gGenderError']="Please select gender"
    }
    if(!gAddress)
    {
        error['gAddressError']="Please enter Address"
    }
    if(!gGovtId)
    {
        error['gGovtIdError']="Please enter Adhar Number"
    }
    if(!gGovtId.match("^[2-9]{1}[0-9]{11}$"))
    {
        error['gGovtIdError']="Please enter valid Adhar Number"
    }
    setFormErrors(error);
     const noError = Object.keys(error).length === 0;
     if(noError)
     {
    const payload={
       
        guestName:gName,
        guestMobile: gPhone,
        guestEmail: gEmail,
        guestGender: gGender,
        guestAddress: gAddress,
        guestGovtId: gGovtId
    }
    dispatch(addGuest(payload));
}

 }
 return(
    <div className='guestAdd' align="center">
      <div className='addGuestContainer col-sm-4 row-top-vertical'>
      <h2>Guest Registration Form</h2>
                {
                    newGuest!==null&&
                    alert("Guest added successfully")
                }
             
                 <div className="form-group">
           <label htmlFor='eName'>Name</label>
            {
                formErrors.gNameError &&
                <div style={{ color: 'red' }}>{formErrors.gNameError}</div>
            }
            <input type="text" className="form-control" name="gName" required value={gName} onChange={v => setGName(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='gPhone'>Mobile Number</label>
            {
                formErrors.gPhoneError &&
                <div style={{ color: 'red' }}>{formErrors.gPhoneError}</div>
            }
            <input type="text" className="form-control" name="gPhone" required value={gPhone} onChange={v => setGPhone(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='gEmail'>Email</label>
            {
                formErrors.gEmailError &&
                <div style={{ color: 'red' }}>{formErrors.gEmailError}</div>
            }
            <input type="text" className="form-control" name="gEmail" required value={gEmail} onChange={v => setGEmail(v.target.value)} />
            </div>
            <div className="form-group">
            <label htmlFor='gGender'>Gender</label>
                    {
                        formErrors.gGenderError &&
                        <div style={{ color: 'red' }}>{formErrors.gGenderError}</div>
                    }
                    <select type="Gender" className="form-control" name="gGender" required value={gGender} onChange={v => setGGender(v.target.value)} >
                        <option value="">----Select Gender-------</option>
                        <option value="Male">MALE</option>
                        <option value="Female">FEMALE</option>
                        </select>
            </div>
            <div className="form-group">
           <label htmlFor='gAddress'>Address</label>
            {
                formErrors.gAddressError &&
                <div style={{ color: 'red' }}>{formErrors.gAddressError}</div>
            }
            <input type="text" className="form-control" name="gAddress" required value={gAddress} onChange={v => setGAddress(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='gGovtId'>Adhar</label>
            {
                formErrors.gGovtIdError &&
                <div style={{ color: 'red' }}>{formErrors.gGovtIdError}</div>
            }
            <input type="text" className="form-control" name="gGovtId" required value={gGovtId} onChange={v => setGGovtId(v.target.value)} />
            </div>
            <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
                <br></br>
                <div>
                <Link to="/room/search" className="btn btn-secondary">Back</Link>
            </div>
      </div>
    </div>
 )
}
export default CreateGuest;