import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { managerAdd } from "../../store/actions/ManagerActions";
import { Link } from "react-router-dom";
function CreateManager()
{
  const newManager=useSelector(state => state.managerReducer.newManager)
//   const [mId, setMId]=useState("");
  const [mName, setMName]=useState("");
  const [mEmail, setMEmail]=useState("");
  const [mPhone, setMPhone]=useState("");
  const [mUserName, setMUserName]=useState("");
  const [mPass, setMPass]=useState("");
  const [formErrors, setFormErrors]=useState({})
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleSubmit= () =>{
    let error={};
    // if(!mId)
    // {
    //     error['mIdError']=" Please enter Id"
    // }
    if(!mName)
    {
        error['mNameError']=" Please enter Name"
    }
    else if(!mName.match("^[A-Za-z]{1}[A-Za-z]*$"))
    {
        error['mNameError']=" Please enter valid Name"
    }
    if(!mEmail)
    {
        error['mEmailError']=" Please enter Email"
    }
    else if(!mEmail.match("^[A-Za-z]*[0-9]*[@]{1}[a-z]*[.]{1}[a-z]*$"))
    {
        error['mEmailError']=" Please enter valid Email"
    }
    if(!mPhone)
    {
        error['mPhoneError']=" Please Enter Mobile Number"
    }
    else if(!mPhone.match("^[6-9]{1}[0-9]{9}"))
    {
        error['mPhoneError']="Please enter valid mobile number"
    }
    if(!mUserName)
    {
        error['mUserNameError']="Please enter userName"
    }
    if(!mPass)
    {
        error['mPassError']=" Please enter password"
    }
    setFormErrors(error)
    const noError = Object.keys(error).length === 0;
    if(noError)
    {
        const payload={
            // managerId:mId,
            managerName:mName,
            managerEmail:mEmail,
            managerPhone:mPhone,
            userName:mUserName,
            password:mPass      
         }
         dispatch(managerAdd(payload));
    }
  }
  return(
    <div className="managerAdd" align="center" >
         <div className='addGuestContainer col-sm-5 row-top-vertical'>
         <h2>Manager Registration Form</h2>
         {
            newManager!== null &&
            navigate("/owner/dashboard")
         }
         {/* <div className="form-group">
           <label htmlFor='mId'>Id</label>
            {
                formErrors.mIdError &&
                <div style={{ color: 'red' }}>{formErrors.mIdError}</div>
            }
            <input type="text" className="form-control" name="mId" required value={mId} onChange={v => setMId(v.target.value)} />
            </div> */}
            <div className="form-group">
           <label htmlFor='mName'>Name</label>
            {
                formErrors.mNameError &&
                <div style={{ color: 'red' }}>{formErrors.mNameError}</div>
            }
            <input type="text" className="form-control" name="mName" required value={mName} onChange={v => setMName(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='mEmail'>Email</label>
            {
                formErrors.mEmailError &&
                <div style={{ color: 'red' }}>{formErrors.mEmailError}</div>
            }
            <input type="text" className="form-control" name="mEmail" required value={mEmail} onChange={v => setMEmail(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='mPhone'>Mobile Number</label>
            {
                formErrors.mPhoneError &&
                <div style={{ color: 'red' }}>{formErrors.mPhoneError}</div>
            }
            <input type="text" className="form-control" name="mPhone" required value={mPhone} onChange={v => setMPhone(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='mUserName'>UserName</label>
            {
                formErrors.mUserNameError &&
                <div style={{ color: 'red' }}>{formErrors.mUserNameError}</div>
            }
            <input type="text" className="form-control" name="mUserName" required value={mUserName} onChange={v => setMUserName(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='mPass'>password</label>
            {
                formErrors.mPassError &&
                <div style={{ color: 'red' }}>{formErrors.mPassError}</div>
            }
            <input type="password" className="form-control" name="mPass" required value={mPass} onChange={v => setMPass(v.target.value)} />
            </div>
            <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
                <br></br><br></br><div>
                <Link to="/owner/dashboard" className="btn btn-secondary">Back</Link>
            </div>
         </div>
    </div>
  )
}
export default CreateManager;