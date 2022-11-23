import React from "react";
import { Component } from "react";
import '../Login/Login.css'
import axios from "axios";
import { useState } from "react";

// class SignUp extends Component{
//     constructor(props){
//         super(props);
//         this.state={}
//     }
//     render(){
//         return(
//            <div>
//             <input className="Login_text" type="text" placeholder="First Name"/>
//             <input className="Login_text" type="text" placeholder="Last Name"/>
//             <input className="Login_text" type="text" placeholder="User Name"/>
//             <input className="Login_text" type="text" placeholder="Email"/>
//                <input className="Login_text" type="text" placeholder="Contact Number"/>
//                 <input className="Login_text" type="password" placeholder="Password"/>
//                 <button className="Login_button">Sign Up </button>
//            </div>
//         );
//     }
// }


function SignUp()
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");
    //const [message, setMessage] = useState("");

   async function handleSubmit(event)
    {
        event.preventDefault();
        event.target.reset();
    try
        {
         await axios.post("http://localhost:8087/api/v1.0/tweets/register", 
        {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            contactNumber: contactNumber,
            password:password
        });
          alert("User Registered Successfully");
         setFirstName("");
         setLastName("");
         setUserName("");
         setEmail("");
         setPassword("");
         setContactNumber("");
        
        }
    catch(err)
        {
          alert("User Registration Failed");
        }
   }
    return (
        <div className="register-container">
     
            <form className="register-form" onSubmit={handleSubmit}> 
            <br></br>      

            <input className="Login_text" type="text" autoComplete="off" required
             name="firstName"
             placeholder="First Name"
                     
             onChange={(event) =>
              {
                  setFirstName(event.target.value);       
              }}
            />

            <input className="Login_text" type="text" autoComplete="off" required
            name="lastName" 
            placeholder="Last Name" 
            onChange={(event) =>
                {
                    setLastName(event.target.value);       
                }}
            />

            <input className="Login_text" type="text" autoComplete="off" required
            name="userName"
            placeholder="User Name"
            onChange={(event) =>
                {
                    setUserName(event.target.value);       
                }}           
            />

             
            <input className="Login_text" type="text" autoComplete="off" required
            name="email" 
            placeholder="Email"
            onChange={(event) =>
                {
                    setEmail(event.target.value);       
                }}           
            />
        <input className="Login_text" type="text" autoComplete="off" required
            name="contactNumber" 
            placeholder="Contact Number"
            onChange={(event) =>
                {
                    setContactNumber(event.target.value);       
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
            <button type="submit" className="Login_button">Sign Up </button>
            {/* <button type="submit">SignUp</button> */}

    
            </form>     

     
        </div>
    )
}

export default SignUp;