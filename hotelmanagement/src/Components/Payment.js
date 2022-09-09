import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function Payment(){
    const foundRooms=useSelector(state => state.roomReducer.foundRooms)
    const [amount, setamount] = useState(foundRooms[0].roomPrice);
    const navigate=useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(amount === ""){
        alert("please enter amount");
        }else{
          var options = {
            key: "rzp_test_IG3I4ff46Fl1Bq",
            key_secret:"QoxjLRzBRwF4khZdt3YU7GUF",
            amount: amount *100,
            currency:"INR",
            name:"pay to confirm your booking",
            handler: function(response){
              alert("payment done successfully");
              navigate("/receptionist/dashboard")
            },
            prefill: {
              name:"Parnapalli Sahithya",
              email:"sahithyasahiparnapalli@gmail.com",
              contact:"9515142091"
            },
            notes:{
              address:"Razorpay Corporate office"
            },
            theme: {
              color:"#3399cc"
            }
          };
          var pay = new window.Razorpay(options);
          pay.open();
        }
      }
      return (
        <div className="payment" align="center">
        <div className="col-sm-5" >
        <div class="card" >
            <div className="card-body">
         <h2>Razorpay Payment </h2>
         <br/>
         <input type="text"placeholder='Enter Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
         <br/><br/>
         <button onClick={handleSubmit} className="btn btn-primary">Pay</button>
         </div>
        </div>
        </div>
        </div>
      );
    }
    export default Payment;
