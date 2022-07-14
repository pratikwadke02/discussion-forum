import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {addAnswer} from '../../actions/answer';
import { getQuestions } from "../../actions/question";

function AnswerList({questionId}) {

  const answerData = useSelector((state) => state.answer.answerData);
  // console.log(answerData);
  const [answer, setAnswer] = useState({
    answer: '',
    questionId: questionId,
  });
  // setAnswer(answerData);
  // console.log(answer);

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = ({currentTarget: input}) => {
    setAnswer({
        ...answer,
        [input.name]: input.value
    })
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        dispatch(addAnswer(answer));
        answerData.push(answer);
        setAnswer({
            answer: '',
            questionId: questionId,
        });
    }catch(error){
        setError(error.message);
        console.log(error);
    }
}
  // const [answer, setAnswer] = useState();
  // console.log(answer);
  return (
    <>
      <form onSubmit={handleSubmit} className="form_container">
        <input
          type="text"
          placeholder="Answer"
          name="answer"
          onChange={handleChange}
          value={answer.answer}
          required
          className="input"
        />

        {error && <div className="error_msg">{error}</div>}
        <button type="submit" className="green_btn">
          Submit
        </button>
      </form>
      {answerData.map((answer) => {
        return (
          <div key={answer._id}>
            <p>{answer.answer}</p>
          </div>
        );
      })}
    </>
  );
}

export default AnswerList;
