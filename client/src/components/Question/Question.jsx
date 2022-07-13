import React from 'react'
import './Question.css'
import { useSelector } from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {incView} from '../../actions/question';

function Question() {

    const dispatch = useDispatch();

    const handleView = (index) => {
        // console.log(index);
        console.log(questionData[index]._id);
        try{
            dispatch(incView(questionData[index]._id));
        }catch(error){
            console.log(error);
        }
    }

    const questionData = (useSelector(state => state.question.questionData));
    // console.log(questionData)

    // const [question, setQuestion] = useState();
    // console.log(question)


  return (
    <>
      {questionData.map((question, index) => {
        return (
          <Link to={`/question/${index}`} key={index} onClick={() => handleView(index)}>
          <div key={index} className="card">
            <h1>Question: {question.question}</h1>
            <p>Views: {question.views}</p>
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