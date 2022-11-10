import React from "react";
import "./Otp.css";
import { useState } from 'react';
import axios from "axios";
import Success from "./Success";
import Failed from './Failed';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux"; 
export default function Otp({email}) {


    const Navigate = useNavigate();

    const [otp, setotp] = useState("");
    const [errorb, seterrorb] = useState(false);
    const [errort, seterrort] = useState("");
    const [errors, seterrors] = useState("");
    const [sucessshow, setsucessshow] = useState(false);
    const [failureshow, setfailureshow] = useState(false);
    // const otp = useSelector((state) => state.otp);
    // const dispatch = useDispatch();



    const verify = (e) => {
          seterrort("");
          seterrors("");
        seterrorb("");
        if (otp=="") {
            seterrorb(true);

        }
        else if(otp !=""){



            const url = "http://localhost:5006/verify9966";
            const data = { otp:otp
          
                };
            const header = {}
            axios.post(url, data, {
                headers: header
            })
                .then((res) => {
                    console.log("Data insert => " + JSON.stringify(res.data))
                    let result = res.data + "";
                    if (result.includes("incorrect otp")) {
                        seterrort("otp is incorrect");
                    console.log("otp incorrect");
                    // setsucessshow(!sucessshow);
                }else if (result.includes("otp is correct")) {
                
                    seterrors("otp is correct");
                    console.log("otp is correct");
                    Navigate("./Login")
                    // setfailureshow(!failureshow);
                // setShow(!show);
                }
                })
                .catch((err) => {
                    console.log("Error => " + JSON.stringify(err))
                })
            }
        }




        const resend = (e) => {
            seterrort("");
            seterrors("new otp generated");
          seterrorb("");

              const url = "http://localhost:5006/resend";
              const data = { email:email
            
                  };
              const header = {}
              axios.post(url, data, {
                  headers: header
              })
                  .then((res) => {
                      console.log("Data insert => " + JSON.stringify(res.data))
                      let result = res.data + "";
                      if (result.includes("incorrect otp")) {
                          seterrort("otp is incorrect");
                      console.log("otp incorrect");
                      // setsucessshow(!sucessshow);
                  }else if (result.includes("otp is correct")) {
                  
                      seterrors("otp is correct");
                      console.log("otp is correct");
                      Navigate("./Login")
                      // setfailureshow(!failureshow);
                  // setShow(!show);
                  }
                  })
                  .catch((err) => {
                      console.log("Error => " + JSON.stringify(err))
                  })
              
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




    return (<>
     {/* {sucessshow ? <Success/> : <></>}
     {failureshow ? <Failed/> : <></>} */}
        {/* {sucessshow ? <Success handleclicksuccess={handleclicksuccess} />: <></>}
        {failureshow ?  <Failed handleclickfailure={handleclickfailure} />: <></>} */}
          <div className="otp_outer">
              <div className="otp_inner">
                  <div className="otp_inner_row1">
                      <label>Verify OTP!</label>
                  </div>
                  <label className="signup_error">{errort}</label>
                  <label className="signup_success">{errors}</label>
                  <div className='otp_inner_row2'>
                      {/* <input type="text" placeholder="OTP" onChange={(e) =>  dispatch({type:"functionotp",payload:e.target.otp}) } value={otp} /> */}
   <input type="text" placeholder="OTP" onChange={(e) =>{setotp(e.target.value);}} value={otp} />
  
                  </div>
                  {errorb && otp == "" ? <label className="Signup_err">otp is mandatory</label> : ""}
  
                  <div className='otp_inner_row3'>
                      <button onClick={(e) => {
                          resend(e)
                      }} >RESEND</button>
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
  
  