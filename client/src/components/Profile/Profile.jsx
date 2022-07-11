import React from 'react'
import "./Profile.css";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {

  const logout = () => {
    localStorage.removeItem('profile');
    window.location.reload();
  }

  const UserData = (useSelector(state => state.profile.userData));
  console.log(UserData);

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

        </div>
        
    </>
  )
}

export default Home
