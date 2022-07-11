import React from 'react'
import { useState } from 'react'

function AddQuestion() {

    const [error, setError] = useState("");

    const [question, setQuestion] = useState("");


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{

        }catch(error){
            console.log(error);
        }
    }

    const handleChange = ({currentTarget: input}) => {
        setQuestion(input.value);
    }

  return (
    <>
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
                        value={question}
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