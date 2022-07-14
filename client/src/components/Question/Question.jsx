import React from 'react'
import './Question.css'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

function Question() {
    const questionData = (useSelector(state => state.question.questionData));
    // console.log(questionData)
  return (
    <>
      {questionData.map((question, index) => {
        return (
          
          <div key={index} className="card">
            <h1>Question: {question.question}</h1>
            <h3>Views: {question.views}</h3>
            <Link to={`/question/${index}`} key={index} ><button className='green_btn'>View</button></Link>
          </div>
        )
      }
      )}
    </>
  );  
}

export default Question;