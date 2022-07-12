import React from 'react'
import "./Profile.css";
import {Link, Navigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

function Home() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')).data.data);

    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    
    const logout = () => {
      dispatch({type: 'LOGOUT'});
      navigate('/login');
      setUser(null);
    }


  return (
    <>
      <nav className="navbar">
            <h1>Profile</h1>
            <Link to='/' >
            <button className='white_btn'>Home</button>
            </Link>
            <button className="white_btn" onClick={logout}>
                Logout
            </button>
        </nav>
        <div className="profile_container">
            <h1>Name: {user.username}</h1>
            <h1>Email: {user.email}</h1>
        </div>
        
    </>
  )
}

export default Home
