import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { display } from '@mui/system';



function SearchDetails(){

    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [userDetails, setUserDetails] = useState("");
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
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
                setUserDetails(res.data);
                document.getElementById('display').innerHTML=res.data;
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
                <form className="signin-form" onSubmit={handleSubmit}>
               <input className="Login_text" type="text" autoComplete="off" required
                      name="name"
                      placeholder="Enter User Name"
                      onChange={(event) =>
                      {
                         setName(event.target.value);       
                      }}           
                />
                <button onClick={handleSubmit} className="Submit_button">Search User</button>
                <div>
                
                User Id: {userId} <br/>
                First Name: {firstName} <br/>
                Last Name: {lastName} <br/>
                User Name: {userName} <br/>
                Email: {email} <br/>
                Contact Number: {contactNumber}
                
            </div>
               
                </form>
                
            
       
           </Grid>
            <Grid item xs={4}></Grid>
                    
        </Grid>
       
        );
}



export default SearchDetails;

