import React from 'react';
import './SidebarOption.css';
import {  useNavigate } from "react-router-dom";
import MyProfile from './MyProfile';

function SidebarOption({active, text, Icon}) {
  const navigate = useNavigate();
  
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
      <Icon/>
      <h2>
        {text}
      {/* <button onClick={handleMyProfile}> {text} </button> */}
      
        
      </h2>
    </div>
  )
}

export default SidebarOption; 