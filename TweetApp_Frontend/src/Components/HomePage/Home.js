import React from "react";
import { Component } from "react";
import Sidebar from './Sidebar';
import Feed from './Feed/Feed'
import './Home.css'
import MyProfile from "./MyProfile";


class Home extends Component{
    render(){
        return(
           <div className="home">
               <Sidebar/>
               <Feed/>
               {/* <MyProfile/> */}
               {/* <Widgets/> */}
           </div>
        );
    }
   
}


export default Home