import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/quiz.css";

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate()
  const { title, questions, attempted, data } = location.state;

  const [index, setIndex] = useState(0);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  let [isQuizCompleted, setIsQuizCompleted] = useState(false)

  const option1 = useRef(null);
  const option2 = useRef(null);
  const option3 = useRef(null);
  const option4 = useRef(null);

  const option_array = [option1, option2, option3, option4];

  const checkAns = (e, ans) => {
    if (!lock) {
      if (questions[index].ca === ans) {
        e.target.classList.add("correct");
        setScore((prevScore) => prevScore + 1); // Use functional state update
      } else {
        e.target.classList.add("wrong");
        option_array[questions[index].ca - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const nextQuestion = () => {
    if (lock) {
      setIndex((prevIndex) => prevIndex + 1);
      setLock(false);
      option_array.forEach((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const submitQuiz = () => {
    console.log("hello")
    data.map(item => {
        const quesKey = Object.keys(item)[0]

        if(item[quesKey].t === title){
            item[quesKey].m = 1
        }
    })
    setIsQuizCompleted(true)
  };

  return (
    <div>
        
        {
            isQuizCompleted || attempted === 1? (
                <div className="quiz-container">
                    <h1>Score</h1>
                    <hr/>
                    <p>Your final score is {score} out of {questions.length}</p>
                    {/* <button onClick={() => {navigate('/incompletePage')}}>Ok</button> */}
            </div>
            ):(
                <div className="quiz-container">
                    <h1>{title}</h1>
                    <hr />
                    <h2>
                        {index + 1}. {questions[index].q}
                    </h2>
                    <ul>
                        <li ref={option1} onClick={(e) => checkAns(e, 1)}>
                        {questions[index].op1}
                        </li>
                        <li ref={option2} onClick={(e) => checkAns(e, 2)}>
                        {questions[index].op2}
                        </li>
                        <li ref={option3} onClick={(e) => checkAns(e, 3)}>
                        {questions[index].op3}
                        </li>
                        <li ref={option4} onClick={(e) => checkAns(e, 4)}>
                        {questions[index].op4}
                        </li>
                    </ul>

                    {index + 1 < questions.length ? (
                        <button onClick={nextQuestion}>Next</button>
                    ) : (
                        <button onClick={submitQuiz}>Submit</button>
                    )}
                    <div className="Index">
                        {index + 1} of {questions.length} questions
                    </div>
                                </div>
                            )
                        }
                        
      
    </div>
  );
}
