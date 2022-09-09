import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../store/actions/AdminActions";
import { useSelector } from "react-redux";
function OwnerLogin()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginErrors, setFormErrors] = useState({});

    const loggedInAdmin = useSelector(state => state.adminReducer.loggedInAdmin);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const doLogin = () => {

        let errors = {};
        if (!username) {

            errors['userNameError'] = "username is required"

        }

        if (!password) {

            errors['passwordError'] = "password is required";

        }
     setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {

        

            const payload = {

                userName: username,
                password: password

            }
            dispatch(loginAdmin(payload))



        }
      
    }


    return (
        
        <div className="loginform" align="center">
          <h2>Owner Login</h2>
        {
            loggedInAdmin !== null &&
                navigate("/owner/dashboard")
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
                            <button onClick={doLogin} className="btn btn-primary">Login</button><br></br>
                            
                        </div>

                    </div>
                </div>
        
    </div>
)
}
export default OwnerLogin;