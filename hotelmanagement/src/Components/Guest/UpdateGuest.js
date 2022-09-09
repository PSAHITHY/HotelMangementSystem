import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateGuest } from "../../store/actions/GuestActions";
function UpdateGuest()
{
 const guest=useSelector(state => state.guestReducer.guest)
 const[formErrors,setFormErrors]=useState({});
 const [gId,setGuestId]=useState(guest.guestId);
 const [gName,setGName]=useState(guest.guestName);
 const [gPhone, setGPhone]=useState(guest.guestMobile);
 const [gEmail, setGEmail]=useState(guest.guestEmail);
 const [gGender,setGGender]=useState(guest.guestGender);
 const [gAddress, setGAddress]=useState(guest.guestGender);
 const [gGovtId, setGGovtId]=useState(guest.guestGovtId);
 const dispatch=useDispatch();
 const navigate=useNavigate();
 const handleSubmit =() =>{
    let error={};
    if(!gId)
    {
        error['gIdError']="Please enter Id"
    }
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
        guestId:gId,
        guestName:gName,
        guestMobile: gPhone,
        guestEmail: gEmail,
        guestGender: gGender,
        guestAddress: gAddress,
        guestGovtId: gGovtId
    }
    dispatch(updateGuest(payload));
    alert("Guest updated successfully")
    navigate(-1)
}

 }
 return(
    <div className='guestUpdate' align="center">
        <div className='addGuestContainer col-sm-4 row-top-vertical'>
         <div className="form-group">
                <label htmlFor='gId'>Id</label>
                <input type="text" className="form-control" name="gId" value={gId} disabled/>
            </div>
            <div className="form-group">
                <label htmlFor='gName'>Name</label>
                <input type="text" className="form-control" name="gName" value={gName} disabled/>
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
                </div>
    </div>
 )
}
export default UpdateGuest;