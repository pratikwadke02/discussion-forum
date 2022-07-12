import React from 'react'
import {useSelector} from 'react-redux';
import {useState} from 'react';

function AnswerList() {

    const answerData = useSelector(state => state.answer.answerData);
    console.log(answerData);

    // const [answer, setAnswer] = useState();
    // console.log(answer);
  return (
    <>
    {
        answerData.map(answer => {
            return (
                <div key={answer._id}>
                    <p>{answer.answer}</p>
                </div>
            )
        }
        )
    }
    </>
  )
}

export default AnswerList