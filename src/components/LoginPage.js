import React, { useState } from "react";
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";
import { users } from '../data/users.js'

function LoginPage(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [psswd, setPsswd] = useState("")

    function validateEmail(value){
        if(value.endsWith('@gmail.com')){
            return true
        }
        else{
            return false
        }
    }

    function handleEmailChange(e){
        const value = e.target.value
        setEmail(value)
    }

    function handlePsswdChange(e){
        setPsswd(e.target.value)
    }

    async function LoginClick (){
        const validate = validateEmail(email)
        const userExist = users.find((user) => user.Email === email)
        const userIndex = users.findIndex((user) => user.Email === email)
        // const isPsswd = users[userIndex].Psswd


        if(validate){
            if(userExist){
                const isPsswd = users[userIndex].Psswd
                if(isPsswd == psswd){
                    navigate('/home')
                }
                else{
                    alert('invalid Password')
                }
            }

            else{
                alert('User does not exist')
            }
        }

        else{
            alert('Invalid email')
        }
    }
    return(
        <div className="main-1" >
            <div className="container-1">
                <h1>Brain Storm</h1>
                <input type="text" value={email} onChange={handleEmailChange} placeholder="User name or Email"></input>
                <input type="password" value={psswd} onChange={handlePsswdChange} placeholder="Password"></input>
                <button onClick={LoginClick}>Login</button>
                <hr></hr>
                <p>Don't have an account ? </p>
                <a href="">Sing Up</a>
            </div>
        </div>
    )
}


export default LoginPage