import React, { useEffect } from 'react';
import './Feed.css'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Button from "@mui/material/Button";
import Tweetbox from '../Tweetbox';
import Post from '../Post';
import Tweet from '../Tweet';
import MyProfile from '../MyProfile';
import { useState } from "react";




function Feed() {
  const [posts,setPosts]= useState([]);

  // useEffect(()=>{
    
  //   let json=[
  //     {
  //       "userName":'vicky',
  //       "tweetMessage": "Watched Vikram?",
  //       "avatar":"https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download",
  //       "tweetImage":"https://m.media-amazon.com/images/M/MV5BMjAxZDEyZTUtMTdiMC00M2FkLWFlYWItZTQ3NWQzNzY2NDdjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
  //     },
  //     {
  //       "userName":'shar12',
  //       "tweetMessage": "Let's party...",
  //       "avatar":"https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download",
  //       "tweetImage":"https://c.tenor.com/c86D6_XlACMAAAAC/weekend-party.gif"
  //     }
  //   ]
  //   setPosts(json);
    
  // },[]);

  useEffect(() => {
    fetch("http://localhost:8087/api/v1.0/tweets/all")
      .then(response => {
        console.log(response.json)
        return response.json()
      })
      .then(data => {
        setPosts(data)
      })
  }
  )
  

 

  return (
    <div className='feed'>
       <h2 className='feed_header'>
        Home
       <BubbleChartIcon className="feed_Icon"/>
        </h2> 
       
       {/* <Tweetbox/> */}
       <Tweet/>
       {/* <Post userName="mikey"
       text="It's working....."
       avatar="https://burst.shopify.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page/download"
       image="https://c.tenor.com/UNTqMDwqh1gAAAAM/hello-hi.gif"/> */}
       {/* <MyProfile/> */}

       {
        posts.map(post => (
          <Post
          userName={post.userName}
          text={post.tweetMessage}
          avatar={post.avatar}
          image={post.tweetImage}
          />
        ))
       }
    </div>
  )
}

export default Feed