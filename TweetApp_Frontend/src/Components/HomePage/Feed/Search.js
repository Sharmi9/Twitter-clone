import React from 'react';
import './Feed.css'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import Button from "@mui/material/Button";
import Tweetbox from '../Tweetbox';
import Post from '../Post';
import Tweet from '../Tweet';
import MyProfile from '../MyProfile';
import Sidebar from '../Sidebar';
import SearchDetails from './SearchDetails';

function Search() {
  return (
    <div className='home'>
        <Sidebar/>
       <div className='feed'>
       <h2 className='feed_header'>
        Explore
        </h2> 
       <SearchDetails/>
       </div> 
    </div>
  )
}

export default Search