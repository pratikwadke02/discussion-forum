import React from 'react'
import './Question.css'
import { useSelector } from 'react-redux';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {incView} from '../../actions/question';
import { useEffect } from 'react';
import {getQuestions} from '../../actions/question';

function Question() {

  const [question, setQuestion] = useState([]);

    const dispatch = useDispatch();

    const questionData = (useSelector(state => state.question.questionData));
    // console.log(questionData)

    const handleView = (index) => {
      console.log(index);
      // console.log(questionData[index]._id);
      try{
          dispatch(incView(questionData[index]._id));
          questionData[index].views += 1;
          console.log(questionData[index].views);
      }catch(error){
          console.log(error);
      }
  }

    // setQuestion(questionData);
    // console.log(question)


  return (
    <>
      {questionData.map((question, index) => {
        return (
          
          <div key={index} className="card">
            <h1>Question: {question.question}</h1>
            <p>Views: {question.views}</p>
            <Link to={`/question/${index}`} key={index} ><button>View</button></Link>
          </div>
        )
      }
      )}
    </>
  );  
}

export default Question;