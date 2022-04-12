import React, {useState} from "react"
import {Link, useNavigate } from "react-router-dom"

function SignUpPage({ setUser }) {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then( (r) => {
            if(r.ok) {
                r.json().then(()=> setUser(user))
                .then(()=>navigate("/"))
            }
        })    
    }

    return(
        <div id="signup">
            <h1>Sign Up Here</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                placeholder="username"
                className = "username-input"
                required = {true}
                id = "username"
                autoComplete = "off"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <input 
                placeholder="password"
                className = "password-input"
                required = {true}
                id = "password"
                autoComplete = "off"
                value={password}
                onChange = { (e) => setPassword(e.target.value)}
                /> 
                <input value="sign up" type="submit"/>
            </form>
        </div>
    )
}
export default SignUpPage