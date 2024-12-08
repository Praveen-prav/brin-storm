import React from "react";
import '../styles/SignUp.css'

function SignUp(){
    return(
        <div className="container">
            <h1>Brain Storm</h1>
            <input type="text" placeholder="User name or Email"></input>
            <input type="password" placeholder="Password"></input>
            <button>SignUp</button>
        </div>
    )
}


export default SignUp