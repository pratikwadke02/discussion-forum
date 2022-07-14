import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { getTrendingQuestions } from '../../actions/question';
import {Link} from 'react-router-dom';
import {incView} from '../../actions/question';


function TrendingQuestions() {
    const dispatch = useDispatch();

    const TrendingQuestions = useSelector(state => state.question.questionData);
    const sortedTrendingQuestions = TrendingQuestions.sort((a, b) => {
        return b.views - a.views;
    }
    );
    const topTrendingQuestions = sortedTrendingQuestions.slice(0, 3);
    // console.log(topTrendingQuestions);


    const handleView = (index) => {
        console.log(index);
        // console.log(questionData[index]._id);
        try{
            dispatch(incView(topTrendingQuestions[index]._id));
            topTrendingQuestions[index].views += 1;
            console.log(topTrendingQuestions[index].views);
        }catch(error){
            console.log(error);
        }
    }

  return (
    <>
    {
        topTrendingQuestions.map((question, index) => {
            return (
                <div key={index} className="card">
                    <h1>Question: {question.question}</h1>
                    <p>Views: {question.views}</p>
                    <p>Answers: {question.answers.length}</p>
                    <Link to={`/question/${index}`} key={index} ><button>View</button></Link>
                </div>
            )
        }
        )
    }
    </>
  )
}

export default TrendingQuestions