// @ts-nocheck
import React from "react";
import '../Login/Login.css';
import { useState } from "react";
import axios from "axios";
import Home from 'Components/HomePage/Home';
import { Link, useNavigate } from "react-router-dom";
import Profile from "Components/HomePage/Feed/Profile";


function SignIn(){

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(false);
    async function handleSubmit(event)
    {
        event.preventDefault();
        event.target.reset();
    try
        {
           axios.request({
            method:'GET',
            url: `http://localhost:8087/api/v1.0/tweets/login/${userName}/${password}`, 
           }).then(res=>{
             console.log(res);
            //  setResponse(res.data);
            if(res.data){
                // alert("Logged in Successfully...");
                navigate('/home');
            }
            else{
                alert("Invalid Username or Password!");
            }

           });
        // console.log(response);
        
        }
    catch(err)
        {
          alert("Invalid Credentials");
        }
   }

//    const trueCredentials = () => {
//     alert("Logged in Successfully...");
//     navigate('/home');
//   }

//   const falseCredentials= () =>{
//     alert(response);
//   }
        return(
           <div>
            <div>
            <form className="signin-form" onSubmit={handleSubmit}>
                
               {/* <input className="Login_text" type="text" placeholder="Username"/> */}
               <input className="Login_text" type="text" autoComplete="off" required
                      name="userName"
                      placeholder="User Name"
                      onChange={(event) =>
                      {
                         setUserName(event.target.value);       
                      }}           
                />

            <input className="Login_text" type="password" autoComplete="off" required
            name="password" 
            placeholder="Password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);       
                }}           
            />


                {/* <input className="Login_text" type="password" placeholder="Password"/> */}
                <button className="Login_button">Sign in </button>
                </form>
                {/* {response ? navigate('/home') : navigate('/')} */}
            </div>
           <div className="Login_ordiv">
               <div className="Login_divider"></div>
               <div className="Login_or">OR</div>
               <div className="Login_divider"></div>
           </div>
           <div className="Login_forgot">
                <Link to={'/forgot'}> Forgot Password?</Link>
            </div>
           </div>
       
        );
        
}

export default SignIn;