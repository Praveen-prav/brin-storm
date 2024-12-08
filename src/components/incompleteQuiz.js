import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import questions_ans from '../data/questions_ans'
// import {data} from '../data/1';
import '../styles/incompleteQuiz.css'

export default function IncompletePage(){
    const navigate = useNavigate()

    const location = useLocation()

    const {arrIn, data} = location.state

    const openQuiz = (e, title, questions, attempted) =>{
        navigate('/quizPage', {state: {title, questions, attempted, data}})
    }
    return(
        <div className="incomplete-container">
           {
            arrIn.map((item, index) => {
                const titles = Object.keys(item)[0]
                const questions = Object.keys(item)[1]
                const attempted = Object.keys(item)[2]
                
                return(
                    <div className="title-cards" key={index} onClick={(e) => openQuiz(e, item[titles], item[questions], item[attempted])}>
                        {item[titles]}
                    </div>
                )
            }
            )
           }
        </div>
    )
}