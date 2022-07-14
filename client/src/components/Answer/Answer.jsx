import React from 'react'
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {getAnswersByQuestionId} from '../../actions/answer';
import AnswerList from './AnswerList';
import {Link} from 'react-router-dom';
import { incView } from '../../actions/question';

function Answer() {

    const {id} = useParams();
    // console.log(id)
    const particularQuestion = useSelector(state => state.question.questionData[id]);
    // console.log(questionData);
    const [question, setQuestion] = useState(particularQuestion);
    // console.log(question)
    const [answer, setAnswer] = useState({
        answer: '',
        questionId: question._id,
    });
    
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    useEffect (() => {
        const getAnswerData = async () => {
            dispatch(getAnswersByQuestionId(question._id));
        }
        dispatch(incView(question._id));
        getAnswerData();
    }, [dispatch, id]);

  return (
    <>
    <nav className="navbar">
            <h1>Discuss</h1>
            <Link to='/' >
            <button className='white_btn'>Home</button>
            </Link>
    </nav>
    <div className="signup_container">
        <div className="signup_form_container">
            <div className="right">
                {question.question}
                <AnswerList questionId = {question._id}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Answer