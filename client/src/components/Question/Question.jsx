import React from 'react'
import './Question.css'
import { useSelector } from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function Question() {

    const questionData = (useSelector(state => state.question.questionData));
    // console.log(questionData)

    // const [question, setQuestion] = useState();
    // console.log(question)


  return (
    <>
      {questionData.map((question, index) => {
        return (
          <Link to={`/question/${index}`} key={index}>
          <div key={index} className="card">
            <h1>{question.question}</h1>
            <button>Upvote</button>
            <button>Downvote</button>
          </div>
          </Link>
        )
      }
      )}
    </>
  );
}

export default Question;