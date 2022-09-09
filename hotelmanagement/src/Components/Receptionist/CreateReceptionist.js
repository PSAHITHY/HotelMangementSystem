import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { receptionistAdd } from "../../store/actions/ReceptionistActions";
import { useState } from "react";
import { Link } from "react-router-dom";
function CreateReceptionist()
{
    const newReceptionist=useSelector(state => state.receptionistReducer.newReceptionist)
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // const [rId, setRId]=useState("");
  const [rName, setRName]=useState("");
  const [rEmail, setREmail]=useState("");
  const [rPhone, setRPhone]=useState("");
  const [rUserName, setRUserName]=useState("");
  const [rPass, setRPass]=useState("");
  const [formErrors, setFormErrors]=useState({})
  const handleSubmit= () =>{
    let error={};
    // if(!rId)
    // {
    //     error['rIdError']=" Please enter Id"
    // }
    if(!rName)
    {
        error['rNameError']=" Please enter Name"
    }
    else if(!rName.match("^[A-Za-z]{1}[A-Za-z]*$"))
    {
        error['rNameError']=" Please enter valid Name"
    }
    if(!rEmail)
    {
        error['rEmailError']=" Please enter Email"
    }
    else if(!rEmail.match("^[A-Za-z]*[0-9]*[@]{1}[a-z]*[.]{1}[a-z]*$"))
    {
        error['rEmailError']=" Please enter valid Email"
    }
    if(!rPhone)
    {
        error['mPhoneError']=" Please Enter Mobile Number"
    }
    else if(!rPhone.match("^[6-9]{1}[0-9]{9}"))
    {
        error['rPhoneError']="Please enter valid mobile number"
    }
    if(!rUserName)
    {
        error['rUserNameError']="Please enter userName"
    }
    if(!rPass)
    {
        error['rPassError']=" Please enter password"
    }
    setFormErrors(error)
    const noError = Object.keys(error).length === 0;
    if(noError)
    {
        const payload={
            // receptionistId:rId,
            receptionistName:rName,
            receptionistEmail:rEmail,
            receptionistMobile:rPhone,
            userName:rUserName,
            password:rPass      
         }
         dispatch(receptionistAdd(payload));
    }
  }
  return(
    <div className="ReceptionistAdd" align="center">
         <div className='addGuestContainer col-sm-6 row-top-vertical'>
         <h2>Receptionist Registration Form</h2>
         {
            newReceptionist!== null &&
            navigate("/manager/dashboard")
         }
         {/* <div className="form-group">
           <label htmlFor='rId'>Id</label>
            {
                formErrors.rIdError &&
                <div style={{ color: 'red' }}>{formErrors.rIdError}</div>
            }
            <input type="text" className="form-control" name="rId" required value={rId} onChange={v => setRId(v.target.value)} />
            </div> */}
            <div className="form-group">
           <label htmlFor='rName'>Name</label>
            {
                formErrors.rNameError &&
                <div style={{ color: 'red' }}>{formErrors.rNameError}</div>
            }
            <input type="text" className="form-control" name="rName" required value={rName} onChange={v => setRName(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='rEmail'>Email</label>
            {
                formErrors.rEmailError &&
                <div style={{ color: 'red' }}>{formErrors.rEmailError}</div>
            }
            <input type="text" className="form-control" name="rEmail" required value={rEmail} onChange={v => setREmail(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='rPhone'>Mobile Number</label>
            {
                formErrors.rPhoneError &&
                <div style={{ color: 'red' }}>{formErrors.rPhoneError}</div>
            }
            <input type="text" className="form-control" name="rPhone" required value={rPhone} onChange={v => setRPhone(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='rUserName'>UserName</label>
            {
                formErrors.rUserNameError &&
                <div style={{ color: 'red' }}>{formErrors.rUserNameError}</div>
            }
            <input type="text" className="form-control" name="rUserName" required value={rUserName} onChange={v => setRUserName(v.target.value)} />
            </div>
            <div className="form-group">
           <label htmlFor='rPass'>password</label>
            {
                formErrors.mPassError &&
                <div style={{ color: 'red' }}>{formErrors.rPassError}</div>
            }
            <input type="password" className="form-control" name="rPass" required value={rPass} onChange={v => setRPass(v.target.value)} />
            </div>
            <div>
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </div>
                <br></br><br></br><div>
                <Link to="/manager/dashboard" className="btn btn-secondary">Back</Link>
            </div>
         </div>
    </div>
  )

}
export default CreateReceptionist;