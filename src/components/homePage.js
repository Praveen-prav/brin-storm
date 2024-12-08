import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {questions_ans} from '../data/questions_ans';
import '../styles/homePage.css'

export default function HomePage(){

    const navigate = useNavigate()
    let [data, setData] = useState(questions_ans)

    let count1 = 0
    let count2 = 0 

    let arrIn = []
    let arrC = []

    data.map((item, index) => {
            const quizKey = Object.keys(item)[0]
            if(item[quizKey].m === 0){
                count1 += 1
                arrIn.push(item[quizKey])
            }

            else{
                count2 += 1
                arrC.push(item[quizKey])
            }
            return 0
        } 
    )

    function openIncompletedQuiz(){
        navigate('/incompletePage', { state: {arrIn, data}} )
    }

    function openCompletedQuiz(){
        navigate('/completePage', {state:{arrC, data}})
    }
    
    return(
        <div className="container-2">
            <div className="incompleteCard" onClick={openIncompletedQuiz}>
                <h2>Incomplete</h2>
                <hr></hr>
                <p>Number of quizes incomplete</p>
                <div className="quizCount">{count1}</div>
            </div>

            <div className="completedCard" onClick={openCompletedQuiz}>
                <h2>Completed</h2>
                <hr></hr>
                <p>Number of quizes completed</p>
                <div className="quizCount">{count2}</div>
            </div>
        </div>
    )
}