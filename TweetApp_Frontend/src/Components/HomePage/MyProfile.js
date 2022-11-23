import React, { useEffect } from 'react';
import '../Login/Login.css';
import { useState } from "react";
import axios from "axios";
import Home from 'Components/HomePage/Home';

import Grid from "@mui/material/Grid";



function MyProfile({name}){

    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [userDetails, setUserDetails] = useState("");
    const [userId, setUserId] = useState("");
    useEffect(() => {
        handleSubmit();
   }, []);

    async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
            axios.get(`http://localhost:8087/api/v1.0/tweets/user/search/${name}`)
            .then(res=>{
                console.log(res.data);
                setUserId(res.data.userId);
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setUserName(res.data.userName);
                setEmail(res.data.email);
                setContactNumber(res.data.contactNumber);
            })

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
                <button onClick={handleSubmit} className="Submit_button">Profile</button>

                <div>
                
                    User Id: {userId} <br/>
                    First Name: {firstName} <br/>
                    Last Name: {lastName} <br/>
                    User Name: {userName} <br/>
                    Email: {email} <br/>
                    Contact Number: {contactNumber}
                    
                </div>
                {/* {userDetails} */}
                
            
       
           </Grid>
            <Grid item xs={4}></Grid>
                    
        </Grid>
       
        );
}



export default MyProfile;

