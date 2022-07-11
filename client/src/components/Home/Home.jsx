import React from 'react'
import "./Home.css";
import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getProfile} from '../../actions/profile';

function Home() {

  const logout = () => {
    localStorage.removeItem('profile');
    window.location.reload();
  }

  const dispatch = useDispatch();

  useEffect(()=> {
    const getUserData = async () => {
        try{
            dispatch(getProfile());
        }catch(error){
            console.log(error);
        }
    }
    getUserData();
}, [dispatch]);


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
