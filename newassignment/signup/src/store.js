import { legacy_createStore } from "redux"
const initialState={
firstname:"",
lastname:"",
email:"",
password:"",
repassword:"",
otp:""
}
const reducer = (prevState = initialState, action) => {
switch (action.type) {
case "functionfirstname":
return {...prevState,firstname:action.payload}
break;
case "functionlastname":
return {...prevState,lastname:action.payload}
break;
case "functionemail":
return {...prevState,email:action.payload}
break;
case "functionpassword":
return {...prevState,password:action.payload}
break;
case "functionrepassword":
return {...prevState,repassword:action.payload}
break;
case "functionotp":
return {...prevState,otp:action.payload}
break;

}
return prevState;
};
const store=legacy_createStore(reducer)
export default store;