import React from 'react';
import Button from "@mui/material/Button";
import './Logout.css';
import { useNavigate } from 'react-router-dom';

function Logout() {

    const navigate = useNavigate();
    function handleSubmit(event){
        alert("Logged Out Successfully...");
        navigate('/');
    }

  return (
    <div>
        <Button onClick={handleSubmit} variant="outlined" className="sidebar_logout" fullWidth>Logout</Button>
    </div>
  )
}

export default Logout