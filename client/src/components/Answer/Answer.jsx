import React from 'react'
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {addAnswer} from '../../actions/answer';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import {getAnswersByQuestionId} from '../../actions/answer';
import AnswerList from './AnswerList';

function Answer() {

    const {id} = useParams();

    
    // console.log(id)

    const questionData = useSelector(state => state.question.questionData[id]);

    
    // console.log(questionData);
    const [question, setQuestion] = useState(questionData);
    // console.log(question)
    const [answer, setAnswer] = useState({
        answer: '',
        questionId: question._id,
    });
    
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect (() => {
        const getAnswerData = async () => {
            dispatch(getAnswersByQuestionId(question._id));
        }
        getAnswerData();
    }, [dispatch, id]);

  return (
    <>
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