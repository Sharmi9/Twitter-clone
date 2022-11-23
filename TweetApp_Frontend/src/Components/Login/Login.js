import Grid from "@mui/material/Grid";
import React from "react";
import { Component } from "react";
import './Login.css'
// @ts-ignore
import icon_img from "../../images/icon1.jfif";
import icon from "../../images/icon.png";
import Signin from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            isLogin:true
        }
    }

    changeLogin=()=>{ 
        if(this.state.isLogin)
            this.setState({isLogin: false})
        else
            this.setState({isLogin: true})
    }

    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <div className="Login_login">
                            {/* <div className="Login_Left">
                                <img src={icon_img} width="280px" height="320px" alt="Image can't be loaded"/>
                            </div> */}
                            <div>
                               <div className="Login_Right">
                                  <img className="Login_logo" src={icon} alt="Image can't be loaded"/>
                                <div className="Login_Signin">
                                    {
                                        this.state.isLogin ? <Signin/> :  <SignUp/>
                                    }

                                </div>  
                               </div>

                              <div className="Login_Signup">
                                {
                                    this.state.isLogin ?
                                    <div className="Login_signupText"> 
                                        Don't have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign up</span>
                                    </div>:
                                    <div className="Login_signupText"> 
                                        Have an account? <span onClick={this.changeLogin} style={{"fontWeight":"bold","color":"#0395F6"}}>Sign in</span>
                                    </div>
                                }   
                                 
                               </div> 
                            </div>
                            

                        </div>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    
                </Grid>
            </div>

        );
    }
}

export default Login;