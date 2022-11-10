import React from "react";
import "./Signup.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { FcGoogle } from 'react-icons/fc';
// import { AiFillFacebook } from 'react-icons/ai';
import { useState } from "react";
import Otp from "./Otp";
import Success from "./Success";
import Failed from './Failed';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const clientId = "872114088441-3u8aml4435idjcqi0fk0fdek99u0kq22.apps.googleusercontent.com";

export default function Signup() {
    // const Navigate = useNavigate();
    const firstname = useSelector((state) => state.firstname);
    const lastname = useSelector((state) => state.lastname);
    const email = useSelector((state) => state.email);
    const password = useSelector((state) => state.password);
    const repassword = useSelector((state) => state.repassword);
    // const otp = useSelector((state) => state.otp);
    const [error1, seterror1] = useState(false);
    const [error, setError] = useState("");
    const [error0, setError0] = useState("");
    // const [lastname, setlastname] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
    // const [repassword, setrepassword] = useState("");
    // const [otp, setotp] = useState("");
    const [show, setShow] = useState(false);
    // const [successshow, setSuccessshow] = useState(false);
    // const [failureshow, setFailureshow] = useState(false);
 
    const dispatch = useDispatch();

    
    const account = (e) => {
        seterror1("");
        setError("");
        setError0("");

        if (firstname=="" ||email == "" || password == ""|| repassword=="") {
            seterror1(true);
          } else if(password!=repassword)
        {
            setError("password and repassword should match");
        }
        
        
        
        else if(firstname !="" && email != "" && password != ""&& repassword !="") 
        {
            setError("");
            setError0("");

   
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
                console.log("Data insert => " + JSON.stringify(res.data))
                let result = res.data + "";
                if (result.includes("email exist")) {
                    setError("Email already exist");
                console.log("Email already exist");
            }else if (result.includes("inserted")) {
            
                setError0("Success");
                console.log("Success");
            setShow(!show);
            }
            })
            .catch((err) => {
                console.log("Error => " + JSON.stringify(err))
            })
        }
    }





    // const verify = (e) => {
    //     // const [otp, setotp] = useState("");
    //     const url = "http://localhost:5006/verify9966";
    //     const data = { otp: otp };
    //     const header = {};
    //     axios.post(url, data, { headers: header })
    //         .then((res) => {
    //             if (res.data = "incorrect otp")
    //                 console.log("incorrect otp")
    //             else
    //                 console.log("otp is correct")
    //             setSuccessshow(!successshow);

    //         })
    //         .catch((err) => {
    //             console.log("Error" + JSON.stringify(err))
    //         })
    // }



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








    return (<>
        {/* {show ? <Otp show={show} account={account} verify={verify} /> : <></>} */}
        {show ? <Otp email={email}/> : <></>}
        {/* {successshow ? <Success /> : <></>}
        {failureshow ? <Failed /> : <></>} */}
        <div className="signup_outer">
            <div className="signup_inner">
                <div className="signup_inner_row1">
                    <label>Signup</label>
                </div>
                <label className="signup_error">{error}</label>
                <label className="signup_sucess">{error0}</label>
                <div className="signup_inner_row2">
                    <div className="signup_inner_row2_left">
                        <input type="text" placeholder="FirstName*" onChange={(e) => dispatch({type:"functionfirstname",payload:e.target.value,})}></input>
                    </div>
                    
                    
                    <div className="signup_inner_row2_right">
                        <input type="text" placeholder="LastName" onChange={(e) => 
                            dispatch({type:"functionlastname",payload:e.target.value,})
                        }></input>
                    </div>
                   
                 
                </div>
                {error1 && firstname == "" ? <label className="Signup_err">Firstname is mandatory</label> : ""}
                <div className="signup_inner_row3">
                    <input type="text" placeholder="Email address*" onChange={(e) => 
                        dispatch({type:"functionemail",payload:e.target.value,})
                    }></input>
                </div>
                {error1 && email == "" ? <label className="Signup_err">Email is mandatory</label> : ""}
                <div className="signup_inner_row4">
                    <input type="password" placeholder="Password*" onChange={(e)=> 
                        dispatch({type:"functionpassword",payload:e.target.value,})
                    } ></input>
                </div>
        {error1 &&  password== "" ? <label className="Signup_err">Password is mandatory</label> : ""}

                <div className="signup_inner_row5">
                    <input type="password" placeholder="Re-Password*" onChange={(e) => 
                         dispatch({type:"functionrepassword",payload:e.target.value,})
                    }></input>
                </div>
    {error1 &&  repassword== "" ? <label className="Signup_err">RePassword is mandatory</label> : ""}

                <div className="signup_inner_row6">
                    <button onClick={(e) => { account(e) }}>Create your account</button>
                </div>
                <div className="signup_inner_row7">
                    <label>____________________ or ____________________</label>
                </div>
                <div className="signup_inner_row8">
                    <label>Sign up with</label>
                </div>
                <div className="signup_inner_row9">
                    <div className="signup_inner_row9_left">
                        {/* <button><FcGoogle className="googleicon" />Google</button> */}
                    </div>
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
                    <div className="signup_inner_row9_right">
                        {/* <button><AiFillFacebook className="fbicon" /> Facebook</button> */}
                        <FacebookLogin className="FacebookLogin"
    appId="1260779654490141"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}