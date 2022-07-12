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
    // console.log(question)
    
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = ({currentTarget: input}) => {
        setAnswer({
            ...answer,
            [input.name]: input.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            dispatch(addAnswer(answer), navigate);
        }catch(error){
            setError(error.message);
            console.log(error);
        }
    }

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
                <form onSubmit={handleSubmit} className="form_container">
                    <h1>{question.question}</h1>
                    <input 
                        type="text"
                        placeholder='Answer'
                        name="answer"
                        onChange={handleChange}
                        value={answer.answer}
                        required
                        className='input' 
                    />

                    {error && <div className='error_msg'>
                        {error}</div>}
                    <button type='submit' className='green_btn'>Submit </button>
                </form>
                <div className="answers">
                    <h1>Answers</h1>
                    <div className="answer_container">
                        <div className="answer">
                            <AnswerList />
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Answer