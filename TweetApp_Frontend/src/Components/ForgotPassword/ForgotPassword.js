import React from "react";
import '../Login/Login.css';
import { useState } from "react";
import axios from "axios";
import Home from 'Components/HomePage/Home';
import { useNavigate } from "react-router-dom";
import './ForgotPassword.css';
import Grid from "@mui/material/Grid";



function ForgotPassword(){

    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [response, setResponse] = useState("");
    async function handleSubmit(event)
    {
        event.preventDefault();
        event.target.reset();
    try
        {
            axios.get(`http://localhost:8087/api/v1.0/tweets/forgot/${userName}/${password}/${confirmPassword}`)
            .then(res=>{
                console.log(res);
                // setResponse(res.data);
                if((res.data == "Password updated successfully...")){
                        alert(res.data);
                        navigate('/');
                    }
                    else{
                        alert(res.data);
                    }
            })
        //    axios.request({
        //     method:'GET',
        //     url: `http://localhost:8087/api/v1.0/tweets/forgot/${userName}/${password}/${confirmPassword}`, 
        //    }).then(res=>{
        //     console.log(response);
        //      setResponse(res.data);
        //    });
        
        }
    catch(err)
        {
          alert("Invalid Credentials");
        }
   }
        return(
            <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
            <div className="ForgotPassword">
            <div className="Login_Right">
            <h3>Reset Password</h3>
            <form className="signin-form" onSubmit={handleSubmit}>
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

           <input className="Login_text" type="password" autoComplete="off" required
            name="confirmPassword" 
            placeholder="Confirm Password"
            onChange={(event) =>
                {
                    setConfirmPassword(event.target.value);       
                }}           
            />


                {/* <input className="Login_text" type="password" placeholder="Password"/> */}
                <button className="Submit_button">Submit</button>
                
                </form>
                <div>
                    
                </div>
            </div>
           </div>
           </Grid>
            <Grid item xs={4}></Grid>
                    
        </Grid>
       
        );
}

export default ForgotPassword;