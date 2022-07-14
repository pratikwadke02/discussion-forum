import React from 'react'
import TrendingQuestions from './TrendingQuestions'
import {Link} from 'react-router-dom';

function TrendingDiscussions() {
  return (
    <>
     <nav className="navbar">
            <h1>Discuss</h1>
            <Link to='/' >
            <button className='white_btn'>Home</button>
            </Link>
    </nav>
    <TrendingQuestions />
    </>
  )
}

export default TrendingDiscussions