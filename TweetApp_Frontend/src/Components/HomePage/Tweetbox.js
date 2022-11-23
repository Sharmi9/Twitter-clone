import { Avatar, Button } from '@mui/material';
import React from 'react';
import './Tweetbox.css';
import { useState } from 'react';

function Tweetbox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.prevent.default();
  }

  return (
    <div className='tweetbox'>
        <form>
        <div className='tweetbox_input'>
            <Avatar src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
            <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} placeholder="What's happening?" type='text'></input>
             </div>
             <input 
             onChange={(e) => setTweetImage(e.target.value)}
             value={tweetImage} className='tweetbox_image' placeholder="Optional: Enter Image URL" type='text'></input>
        <Button onClick={sendTweet} type="submit" className='tweetbox_tweetButton'>Tweet</Button>
        </form>

    </div>
  )
}

export default Tweetbox