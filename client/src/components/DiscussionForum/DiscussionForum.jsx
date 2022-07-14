import React from 'react'
import Question from '../Question/Question'
import {Link} from 'react-router-dom';


function DiscussionForum() {

  return (
    <>
     <nav className="navbar">
            <h1>Discuss</h1>
            <Link to='/' >
            <button className='white_btn'>Home</button>
            </Link>
    </nav>
    <Question />
    </>
  )
}

export default DiscussionForum