import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addQuestion} from '../../actions/question'
import {Link} from 'react-router-dom';

function AddQuestion() {

    const [error, setError] = useState("");

    const [question, setQuestion] = useState({
        question: '',
    });

    const handleChange = ({currentTarget: input}) => {
        setQuestion({...question, [input.name]:input.value})
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            dispatch(addQuestion(question, navigate));
        }catch(error){
            console.log(error);
        }
    };

    

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
                <form onSubmit={handleSubmit} className="form_container">
                    <h1>Add Question</h1>
                    <input 
                        type="text"
                        placeholder='Question'
                        name="question"
                        onChange={handleChange}
                        value={question.question}
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

export default AddQuestion