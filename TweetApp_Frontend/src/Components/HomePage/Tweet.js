import { Avatar, Button } from '@mui/material';
import React from 'react';
import './Tweetbox.css';
import axios from "axios";
import { useState } from "react";

    

//   return (
//     <div className='tweetbox'>
//         <form onSubmit={sendTweet}>
//         <div className='tweetbox_input'>
//             <Avatar src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
//             <input 
//             onChange={(e) => setTweetMessage(e.target.value)}
//             value={tweetMessage} placeholder="What's happening?" type='text'></input>
            
//              <input 
//              onChange={(e) => setTweetImage(e.target.value)}
//              value={tweetImage} className='tweetbox_image' placeholder="Optional: Enter Image URL" type='text'></input>
//         {/* <Button  type="submit" className='tweetbox_tweetButton'>Tweet</Button> */}
//         <Button className='tweetbox_tweetButton'>Tweet</Button>
//         </div>
//         </form>

//     </div>
//   )
// }

export default Tweet


function Tweet()
{
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
   async function handleSubmit(event)
    {
        event.preventDefault();
        event.target.reset();
    try
        {
         await axios.post("http://localhost:8087/api/v1.0/tweets/postTweet/vicky", 
        {
            tweetMessage: tweetMessage,
            tweetImage:tweetImage
        });
        //  alert("Tweet Posted Successfully");
         setTweetMessage("");
         setTweetImage("");
         
        }
    catch(err)
        {
          alert("Tweet post Failed");
        }
   }
    return (
        <div className="tweetbox">
     
            <form  onSubmit={handleSubmit}> 
            <br></br>      
            <div className="tweetbox_input">
            <input  type="text" autoComplete="off" required
             name="tweetMessage"
             placeholder="What's happening?"
                     
             onChange={(event) =>
              {
                  setTweetMessage(event.target.value);       
              }}
            />

            <input 
             onChange={(e) => 
             setTweetImage(e.target.value)}
             value={tweetImage} className='tweetbox_image' 
             placeholder="Optional: Enter Image URL" type='text'></input>
            <button className='tweetbox_tweetButton' type="submit">Tweet </button>

            </div>
            </form>     

     
        </div>
    )
}

