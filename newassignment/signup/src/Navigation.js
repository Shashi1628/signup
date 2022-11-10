import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "./Signup";
import Otp from "./Otp";
import Login from "./Login";
import Welcome from "./Welcome";
export default function Navigation() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Welcome" element={<Welcome/>}></Route>
            {/* <Route path="/Verify" element={<Verify/>}></Route> */}
            <Route path="/otp" element={<otp/>}></Route>
          
          </Routes>
        </BrowserRouter>
      </>
    );
  }