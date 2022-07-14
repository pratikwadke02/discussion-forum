import React from 'react'
import './TrendingQuestions.css'
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function TrendingQuestions() {
    const dispatch = useDispatch();

    const TrendingQuestions = useSelector(state => state.question.questionData);
    const sortedTrendingQuestions = TrendingQuestions.sort((a, b) => {
        return b.views - a.views;
    }
    );
    const topTrendingQuestions = sortedTrendingQuestions.slice(0, 3);
    // console.log(topTrendingQuestions);


  return (
    <>
    {
        topTrendingQuestions.map((question, index) => {
            return (
                <div key={index} className="card">
                    <h1>Question: {question.question}</h1>
                    <h3>Views: {question.views}</h3>
                    <Link to={`/question/${index}`} key={index} ><button className='green_btn'>View</button></Link>
                </div>
            )
        }
        )
    }
    </>
  )
}

export default TrendingQuestions