import React from 'react'
import "./Home.css";
import {Link} from 'react-router-dom';

function Home() {

  const logout = () => {
    localStorage.removeItem('profile');
    window.location.reload();
  }

  return (
    <>
      <nav className="navbar">
            <h1>Logged in succesfully</h1>
            <Link to='/add_question'>
                <button className='white_btn'>Add Question</button>
            </Link>
            <Link to='/profile' >
            <button className='white_btn'>Profile</button>
            </Link>
            <button className="white_btn" onClick={logout}>
                Logout
            </button>
        </nav>
        
    </>
  )
}

export default Home
