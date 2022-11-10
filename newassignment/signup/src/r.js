

import React from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
const clientId = "872114088441-3u8aml4435idjcqi0fk0fdek99u0kq22.apps.googleusercontent.com";

export default function Login() {

  const Navigate = useNavigate();
//     const [showLoginButton, setShowLoginButton] = useState(true);
//     const [showLogoutButton, setShowLogoutButton] = useState(false);
// const onLoginSucesss=(res)=> {
//   console.log('login sucess:',res.profileObj);
//   setShowLoginButton(false);
//   setShowLogoutButton(true);
// }

// const onfailureSucess=(res)=> {
//   console.log('login failed',res);
//   // setShowloginButton(true);
// }
// const onSignoutSucess=()=> {
//   alert("signout")
//   setShowLoginButton(true);
//   setShowLogoutButton(false);;
// }
  

    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repassword, setrepassword] = useState("");
    // const Navigate = useNavigate();
    const loginclick = (e) => {
        // alert("HI!")
        const url = "http://localhost:5006/verifyotp5";
        const data = { firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            repassword: repassword
            };
        const header = {}
        axios.post(url, data, {
            headers: header
        })
            .then((res) => {
                console.log("Response => " + JSON.stringify(res.data))
                if (res.data==="Login details incorrect!")
                alert("Login details incorrect!")
                // else if(res.data==="Both the fields are mandatory")
                // alert("Both the fields are mandatory")
                else
                
                 Navigate("./Verify")
                // Navigate("/Sucess")
            })
            .catch((err) => {
                console.log("Error => " + err)
            })
    }
    

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };
  


  
    
const responseFacebook = (response) => {
  console.log("login result",response);
}
const componentClicked = (data) => {
  console.warn(data);
}
  return (
    <>
    
      <div className="assign _outer">
        <div className="assign_inner">
            <div className="assign_inner_row1">
                Signup
            </div>
            <div className="assign_inner_row2">
                <input className="firstname"
                 onChange={(e) =>{ setfirstname(e.target.value) }}
                      placeholder="FirstName"></input>
                <input className="lastname"
                 onChange={(e) => { setlastname(e.target.value) }} 
                 placeholder="LastName"></input>
            </div>
            <div className="assign_inner_row3">
            <input className="email"
            onChange={(e) => { setemail(e.target.value) }} 
            placeholder="Email address"></input>
            </div>
            <div className="assign_inner_row4">
            <input className="password" 
            onChange={(e) => { setpassword(e.target.value) }}
             placeholder="Password"></input>
            </div>
            <div className="assign_inner_row5">
            <input className="repassword"
            onChange={(e) => { setrepassword(e.target.value) }}
             placeholder="Re-Password"></input>
            </div>
            <div className="assign_inner_row6">
          <button className="button" 
          onClick={(e)=>{loginclick(e)}}
          >Create your account</button>
            </div>
            <div className="assign_inner_row7">
         ______________________  or   _________________
            </div>
            <div className="assign_inner_row8">
       Signup with
            </div>  
            <div className="assign_inner_row9">
      {/* <button className="btngoogle"><FcGoogle className="googleicon"/>Google</button> */}


      { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

{ showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
{/*      
    {showLoginButton? */}
  {/* <GoogleLogin
    clientId={clientId}
    buttonText="Login" */}
    {/* // onSuccess={onLoginSucesss}
    // onFailure={onfailureSucess}
    cookiePolicy={'single_host_origin'}
  /> */}
{/* 
   :null }
{showLogoutButton? */}
{/* <GoogleLogout
      clientId={clientId}
      buttonText="Logout" */}
      {/* // onLogoutSuccess={onSignoutSucess}
    >
    </GoogleLogout>

:null } */}


{/* 
      <button className="btnFacebook"><AiFillFacebook className="facebookicon"/>Facebook</button> */}
      <FacebookLogin className="FacebookLogin"
    appId="1260779654490141"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
    
            </div>  
        </div>
      </div>
    </>
  );

}










import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { useState } from "react";
import Otp from "./Otp";
import Success from "./Success";
import "./Signup.css";
import axios from 'axios';
import Failed from './Failed';
export default function Signup() {
    const account = (e) => {
        setShow(!show);
        const url = "http://localhost:4000/signup";
        const data = {
            firstname: FirstName,
            lastname: LastName,
            email: Email,
            password: Password,
            repassword: RePassword
        };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Data Inserted!" + JSON.stringify(res));
            })
            .catch((err) => {
                console.log("Error: " + JSON.stringify(err));
            })

        const url1 = "http://localhost:4000/otpgenerate";
        axios.post(url1, data, { headers: header })
            .then((res) => {
                console.log("Otp Sent!")
            })
            .catch((err) => {
                console.log("Error" + JSON.stringify(err))
            })
    }

    const verify = (e) => {
        const url = "http://localhost:4000/verifyotp";
        const data = { email: Email };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                if (res.data = "Invalid OTP")
                    console.log("Invalid Otp")
                else
                    console.log("Otp Verified!")
                setSuccessshow(!successshow);

            })
            .catch((err) => {
                console.log("Error" + JSON.stringify(err))
            })
    }


    const [FirstName, setFirstname] = useState("");
    const [LastName, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RePassword, setRePassword] = useState("");
    const [show, setShow] = useState(false);
    const [successshow, setSuccessshow] = useState(false);
    const [failureshow, setFailureshow] = useState(false);

    return <>
        {show ? <Otp show={show} account={account} verify={verify} /> : <></>}
        {successshow ? <Success /> : <></>}
        {failureshow ? <Failed /> : <></>}
        <div className="signup_outer">
            <div className="signup_inner">
                <div className="signup_inner_row1">
                    <label>Signup</label>
                </div>
                <div className="signup_inner_row2">
                    <div className="signup_inner_row2_left">
                        <input type="text" placeholder="FirstName" onChange={(e) => {
                            setFirstname(e.target.value);
                        }}></input>
                    </div>
                    <div className="signup_inner_row2_right">
                        <input type="text" placeholder="LastName" onChange={(e) => {
                            setLastname(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="signup_inner_row3">
                    <input type="text" placeholder="Email address" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row4">
                    <input type="password" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row5">
                    <input type="password" placeholder="Re-Password" onChange={(e) => {
                        setRePassword(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row6">
                    <button onClick={(e) => { account(e); }}>Create your account</button>
                </div>
                <div className="signup_inner_row7">
                    <label>____________________ or ____________________</label>
                </div>
                <div className="signup_inner_row8">
                    <label>Sign up with</label>
                </div>
                <div className="signup_inner_row9">
                    <div className="signup_inner_row9_left">
                        <button><FcGoogle className="googleicon" />Google</button>
                    </div>
                    <div className="signup_inner_row9_right">
                        <button><AiFillFacebook className="fbicon" /> Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}














import React from "react";
import "./Otp.css";
import { useState } from 'react';
import axios from "axios";
import Success from "./Success";
import Failed from './Failed';
import { useDispatch, useSelector } from "react-redux"; 


    export default function Otp() {


    const [error1, seterror1] = useState(false);
    const [error, seterror] = useState("");
    const [sucessshow, setsucessshow] = useState(false);
    const [failureshow, setfailureshow] = useState(false);
    const otp = useSelector((state) => state.otp);
    const dispatch = useDispatch();
    const verify = (e) => {
        // //  setshow(true);
        // seterror1("");
        // seterror("");
        // setshow1(true);
        // setshow(true);
        // setshow2(true);
        if (otp=="") {
            seterror1(true);
        }
        else{
            seterror("");
        const url = "http://localhost:5006/verify9966";
        const data = { otp: otp};
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                if (res.data = "incorrect otp"){
                    seterror("otp is incorrect");
                    console.log("incorrect otp")
                    setsucessshow(!sucessshow);
                    return;
                }
                else{
                    seterror("Verified");
                    console.log("otp is correct")
                    // show
                    setfailureshow(!failureshow);
                    return;
                }
              

            })
            .catch((err) => {
                console.log("Error" + JSON.stringify(err))
            })


        }
    }
  
    // return show ? (<>
     return (<>
      {sucessshow ? <Success/> : <></>}
      {failureshow ? <Failed/> : <></>}
        <div className="otp_outer">
            <div className="otp_inner">
                <div className="otp_inner_row1">
                    <label>Verify OTP!</label>
                </div>
                <label className="signup_error">{error}</label>
                <div className='otp_inner_row2'>
                    <input type="text" placeholder="OTP" onChange={(e) =>  dispatch({type:"functionotp",payload:e.target.otp}) } />

                </div>
                {error1 && otp == "" ? <label className="Signup_err">otp is mandatory</label> : ""}

                <div className='otp_inner_row3'>
                    <button>RESEND</button>
                    <button onClick={(e) => {
                        verify(e)
                    }}>VERIFY</button>
                </div>
            </div>
        </div>
  {/*   </>) : <></> */}
  </>
     )
}









console.log(err);
res.sendStatus(500);
return;
}
console.log("fetching  Details");


if(result==""){

res.send("incorrect otp");

return;
}
else{


  res.send("otp is correct");
  return;


































  import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { useState } from "react";
import Otp from "./Otp";
import Success from "./Success";
import "./Signup.css";
import axios from 'axios';
import Failed from './Failed';
export default function Signup() {
    const account = (e) => {
        setShow(!show);
        const url = "http://localhost:4000/signup";
        const data = {
            firstname: FirstName,
            lastname: LastName,
            email: Email,
            password: Password,
            repassword: RePassword,
        };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Data Inserted!" + JSON.stringify(res));
            })
            .catch((err) => {
                console.log("Error: " + JSON.stringify(err));
            })

        // const url1 = "http://localhost:4000/otpgenerate";
        // axios.post(url1, data, { headers: header })
        //     .then((res) => {
        //         console.log("Otp Sent!")
        //     })
        //     .catch((err) => {
        //         console.log("Error" + JSON.stringify(err))
        //     })
    }

    const verify = () => {
        const url = "http://localhost:4000/verifyotp";
        const data = { otp: otpval, email: Email };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Result => " + JSON.stringify(res.data))
                if (res.data == "Invalid OTP") {
                    setShow(!show)
                    setFailureshow(!failureshow)
                }
                else {
                    setShow(!show)
                    setSuccessshow(!successshow);
                }
            })
            .catch((err) => {
                console.log("Error" + JSON.stringify(err))
            })
    }

    const handleclicksuccess = () => {
        setSuccessshow(!successshow)
    }
    const handleclickfailure = () => {
        setFailureshow(!failureshow)
    }
    const [FirstName, setFirstname] = useState("");
    const [LastName, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RePassword, setRePassword] = useState("");
    const [otpval, setOtpval] = useState("");
    const [show, setShow] = useState(false);
    const [successshow, setSuccessshow] = useState(false);
    const [failureshow, setFailureshow] = useState(false);

    return <>
        {show ? <Otp otpval={otpval} setOtpval={setOtpval} verify={verify} /> : <></>}
        {successshow ? <Success handleclicksuccess={handleclicksuccess} /> : <></>}
        {failureshow ? <Failed handleclickfailure={handleclickfailure} /> : <></>}
        <div className="signup_outer">
            <div className="signup_inner">
                <div className="signup_inner_row1">
                    <label>Signup</label>
                </div>
                <div className="signup_inner_row2">
                    <div className="signup_inner_row2_left">
                        <input type="text" placeholder="FirstName" onChange={(e) => {
                            setFirstname(e.target.value);
                        }}></input>
                    </div>
                    <div className="signup_inner_row2_right">
                        <input type="text" placeholder="LastName" onChange={(e) => {
                            setLastname(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="signup_inner_row3">
                    <input type="text" placeholder="Email address" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row4">
                    <input type="password" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row5">
                    <input type="password" placeholder="Re-Password" onChange={(e) => {
                        setRePassword(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row6">
                    <button onClick={(e) => { account(e); }}>Create your account</button>
                </div>
                <div className="signup_inner_row7">
                    <label>____________________ or ____________________</label>
                </div>
                <div className="signup_inner_row8">
                    <label>Sign up with</label>
                </div>
                <div className="signup_inner_row9">
                    <div className="signup_inner_row9_left">
                        <button><FcGoogle className="googleicon" />Google</button>
                    </div>
                    <div className="signup_inner_row9_right">
                        <button><AiFillFacebook className="fbicon" /> Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}












        
    //     const url = "http://localhost:5006/verify9966";
    //     const data = { otp: otp};
    //     const header = {};
    //     axios.post(url, data, { headers: header })
    //         .then((res) => {
    //             if (res.data = "incorrect otp"){
    //                 // seterrort("otp is incorrect");
    //                 console.log("incorrect otp")
    //                 // setfailureshow(!failureshow);
                
    //             }
    //             else if (res.data = "otp is correct"){
    //                 // seterrort("Verified");
    //                 console.log("otp is correct")
    //                 // show
                    
    //                 // setsucessshow(!sucessshow);
               
    //             }
              

    //         })
    //         .catch((err) => {
    //             console.log("Error" + JSON.stringify(err))
    //         })


    //     // }
    // }
    // const handleclicksuccess = () => {
    //     setsucessshow(!sucessshow)
    // }
    // const handleclickfailure = () => {
    //     setfailureshow(!failureshow)
    // }





    const url = "http://localhost:5006/verify9966";
    const data = { otp: otp};
    const header = {};
    axios.post(url, data, { headers: header })
        .then((res) => {
            if (res.data = "incorrect otp"){
                // seterrort("otp is incorrect");
                console.log("incorrect otp")
                // setfailureshow(!failureshow);
            
            }
            else if (res.data = "otp is correct"){
                // seterrort("Verified");
                console.log("otp is correct")
                // show
                
                // setsucessshow(!sucessshow);
           
            }
          

        })
        .catch((err) => {
            console.log("Error" + JSON.stringify(err))
        })










































        import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai';
import { useState } from "react";
import Otp from "./Otp";
import Success from "./Success";
import "./Signup.css";
import axios from 'axios';
import Failed from './Failed';
export default function Signup() {
    const account = (e) => {
        setShow(!show);
        const url = "http://localhost:4000/signup";
        const data = {
            firstname: FirstName,
            lastname: LastName,
            email: Email,
            password: Password,
            repassword: RePassword,
        };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Data Inserted!" + JSON.stringify(res));
            })
            .catch((err) => {
                console.log("Error: " + JSON.stringify(err));
            })

        // const url1 = "http://localhost:4000/otpgenerate";
        // axios.post(url1, data, { headers: header })
        //     .then((res) => {
        //         console.log("Otp Sent!")
        //     })
        //     .catch((err) => {
        //         console.log("Error" + JSON.stringify(err))
        //     })
    }

    const verify = () => {
        const url = "http://localhost:4000/verifyotp";
        const data = { otp: otpval, email: Email };
        const header = {};
        axios.post(url, data, { headers: header })
            .then((res) => {
                console.log("Result => " + JSON.stringify(res.data))
                if (res.data == "Invalid OTP") {
                    setShow(!show)
                    setFailureshow(!failureshow)
                }
                else {
                    setShow(!show)
                    setSuccessshow(!successshow);
                }
            })
            .catch((err) => {
                console.log("Error" + JSON.stringify(err))
            })
    }

    const handleclicksuccess = () => {
        setSuccessshow(!successshow)
    }
    const handleclickfailure = () => {
        setFailureshow(!failureshow)
    }
    const [FirstName, setFirstname] = useState("");
    const [LastName, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [RePassword, setRePassword] = useState("");
    const [otpval, setOtpval] = useState("");
    const [show, setShow] = useState(false);
    const [successshow, setSuccessshow] = useState(false);
    const [failureshow, setFailureshow] = useState(false);

    return <>
        {show ? <Otp otpval={otpval} setOtpval={setOtpval} verify={verify} /> : <></>}
        {successshow ? <Success handleclicksuccess={handleclicksuccess} /> : <></>}
        {failureshow ? <Failed handleclickfailure={handleclickfailure} /> : <></>}
        <div className="signup_outer">
            <div className="signup_inner">
                <div className="signup_inner_row1">
                    <label>Signup</label>
                </div>
                <div className="signup_inner_row2">
                    <div className="signup_inner_row2_left">
                        <input type="text" placeholder="FirstName" onChange={(e) => {
                            setFirstname(e.target.value);
                        }}></input>
                    </div>
                    <div className="signup_inner_row2_right">
                        <input type="text" placeholder="LastName" onChange={(e) => {
                            setLastname(e.target.value);
                        }}></input>
                    </div>
                </div>
                <div className="signup_inner_row3">
                    <input type="text" placeholder="Email address" onChange={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row4">
                    <input type="password" placeholder="Password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row5">
                    <input type="password" placeholder="Re-Password" onChange={(e) => {
                        setRePassword(e.target.value);
                    }}></input>
                </div>
                <div className="signup_inner_row6">
                    <button onClick={(e) => { account(e); }}>Create your account</button>
                </div>
                <div className="signup_inner_row7">
                    <label>____________________ or ____________________</label>
                </div>
                <div className="signup_inner_row8">
                    <label>Sign up with</label>
                </div>
                <div className="signup_inner_row9">
                    <div className="signup_inner_row9_left">
                        <button><FcGoogle className="googleicon" />Google</button>
                    </div>
                    <div className="signup_inner_row9_right">
                        <button><AiFillFacebook className="fbicon" /> Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}