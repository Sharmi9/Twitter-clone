import { Avatar } from '@mui/material';
import React from 'react';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import './Post.css';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";



function Post({
    userName,
    text,
    image,
    avatar
}) {
  const [likes, setLikes] = useState(0);
  function handleLike(){
      setLikes(likes+1);
  }
    
  return (
    <div className='post' >
        <div className='post_avatar'>
            <Avatar src={avatar}/>
        </div>
        <div className='post_body'>
            <div className='post_header'>
            <div className="post__headerText">
              <h3>
                {userName}{" "}
        
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            {/* <RepeatIcon fontSize="small" /> */}
            <div>
            <IconButton aria-label="count" onClick={handleLike}>
            <FavoriteBorderIcon fontSize="small" />
            </IconButton>
            {likes}
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Post