import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginManager } from "../../store/actions/ManagerActions";
import { Link } from "react-router-dom";
function ManagerLogin()
{
 const loggedInManager=useSelector(state => state.managerReducer.loggedInManager)
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [loginErrors, setLoginErrors] = useState({})
 const dispatch=useDispatch();
 const navigate=useNavigate();
 const userLogin = () => {
    let error = {};
    if (!username) {
        error['userNameError'] = "Please enter username"
    }
    if (!password) {
        error['passwordError'] = "Please enter password"
    }

setLoginErrors(error);

const noError = Object.keys(error).length === 0;

if (noError) {
    const payload = {
        userName: username,
        password: password
    }
    dispatch(loginManager(payload));
}
}

return (
    <div className="loginform" align="center">
       <h2>Manager Login</h2>
        {
            loggedInManager !== null &&
                navigate("/manager/dashboard")
        }
                
                <div className="col-sm-5">
                    <div class="card">
                        <div className="card-body">
                            <form>
                                <div className="form-control-label">
                                    <label htmlFor='username' className="font-weight-bold">Username</label><br></br>
                                    {
                                        loginErrors.userNameError &&
                                        <div style={{color:'red'}}>{loginErrors.userNameError}</div>
                                    }
                                    <input type="text" required="true" name="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                                </div><br></br>
                                <div className="form-control-label" >
                                    <label htmlFor='password' className="font-weight-bold">Password</label><br></br>
                                    {
                                        loginErrors.passwordError &&
                                        <div style={{color:'red'}}>{loginErrors.passwordError}</div>
                                    }
                                    <input type="password" required="true" name="password" placeholder="*****" value={password} onChange={e => setPassword(e.target.value)} />
                                </div>
                            </form><br></br>
                            <button onClick={userLogin} className="btn btn-primary">Login</button><br></br>
                            
                        </div>

                    </div>
                </div>
        
    </div>
)

}
export default ManagerLogin;