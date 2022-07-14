import React from 'react'
import "./Home.css";
import {Link, Navigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {getQuestions} from '../../actions/question';
import Question from '../Question/Question';
import Search from '../Search/Search';

function Home() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const logout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/login');
    setUser(null);
  }

  useEffect (() => {
    const getQuestionData = async () => {
     dispatch(getQuestions());
    }
    getQuestionData();
  }, [dispatch]);




  return (
    <>
      <nav className="navbar">
            <h1>Welcome to Discussion - Forum</h1>
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
        <div className="container">
        <div className="search">
          <Search />
        </div>
          <div>
            <Link to='/discussion'>
            <button className="green_btn">Discussion Forum</button>
            </Link>
          </div>
          <div>
            <Link to='/trending'>
            <button className="green_btn">Trending Questions</button>
            </Link>
          </div>
        </div>
        <div>
           <div>
            <Question />
          </div>
        </div>
        
    </>
  )
}

export default Home
