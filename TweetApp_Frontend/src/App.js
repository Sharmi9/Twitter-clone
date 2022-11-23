import './App.css';
import React from 'react';
import Login from './Components/Login/Login';
import Home from './Components/HomePage/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ForgotPassword from 'Components/ForgotPassword/ForgotPassword';
import MyProfile from 'Components/HomePage/MyProfile';
import Profile from 'Components/HomePage/Feed/Profile';
import Search from 'Components/HomePage/Feed/Search';


function App() {
  return (
    <Router>
    <div className="App">
      
      {/* <Login/> */}
      {/* <Home/> */}
      <Routes>
      <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<Search />} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
