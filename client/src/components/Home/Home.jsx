import React from 'react'
import "./Home.css";
import {Link, Navigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {getQuestions, getTrendingQuestions} from '../../actions/question';
import Question from '../Question/Question';
import {getAnswersByQuestionId} from '../../actions/answer';
import TrendingQuestions from '../TrendingQuestions/TrendingQuestions';

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

  // useEffect (() => {
  //   const getTrendingData = async () => {
  //     dispatch(getTrendingQuestions());
  //   }
  //   getTrendingData();
  // }, [dispatch]);



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
        <div className="container">
          <div>
            <Question />
          </div>
          <div>
            <TrendingQuestions />
          </div>
        </div>
        
    </>
  )
}

export default Home
