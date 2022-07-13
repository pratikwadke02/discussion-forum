import React from 'react'
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { getTrendingQuestions } from '../../actions/question';


function TrendingQuestions() {
    const dispatch = useDispatch();

    // useEffect (() => {
    //       const getTrendingData = async () => {
    //         dispatch(getTrendingQuestions());
    //       }
    //       getTrendingData();
    //     }, [dispatch]);

  return (
    <div>Trending Questions</div>
  )
}

export default TrendingQuestions