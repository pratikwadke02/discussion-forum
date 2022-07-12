import React from 'react'
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';

function Answer() {

    const {id} = useParams();
    // console.log(id)

    const questionData = useSelector(state => state.question.questionData[id]);
    console.log(questionData)
    
    const [question, setQuestion] = useState(questionData);
    
    const [error, setError] = useState("");

    const handleChange = ({currentTarget: input}) => {
    }

    const handleSubmit = async (e) => {
    }

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
                        // value={question.question}
                        required
                        className='input' 
                    />
                    {error && <div className='error_msg'>
                        {error}</div>}
                    <button type='submit' className='green_btn'>Upload </button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Answer