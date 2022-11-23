// @ts-nocheck
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Button from "@mui/material/Button";
import Logout from "./Logout";
import { useNavigate } from "react-router-dom";


function Sidebar(){
    const navigate = useNavigate();
    function handleMyProfile(){

        navigate('/profile');
      }

    function handleMySearch(){
        navigate('/search');
    }

    function handleMyHome(){
        navigate('/home');
    }
    return(
        <div className="sidebar">
            <TwitterIcon className="sidebar_TweetIcon"/>
            {/* <SidebarOption active Icon={HomeIcon} text='Home'/> */}
            {/* <SidebarOption Icon={SearchIcon} text='Explore'/> */}
            {/* <SidebarOption Icon={NotificationsNoneIcon} text='Notifications'/> */}
            {/* <SidebarOption  Icon={PermIdentityIcon} text='My profile' /> */}
            <Button startIcon= {<HomeIcon/>} onClick={handleMyHome} variant="outlined" className="sidebar_Tweet" fullWidth>Home</Button>
            <Button startIcon= {<SearchIcon/>} onClick={handleMySearch} variant="outlined" className="sidebar_Tweet" fullWidth>Explore</Button>
            <Button startIcon= {<PermIdentityIcon/>} onClick={handleMyProfile} variant="outlined" className="sidebar_Tweet" fullWidth>My Profile</Button>
            {/* <Button variant="outlined" className="sidebar_Tweet" fullWidth>Tweet</Button> */}
            
            <Logout/>

            
        </div>
    );

}

export default Sidebar;