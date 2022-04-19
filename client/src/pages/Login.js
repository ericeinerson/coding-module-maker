import React, {useState} from "react"
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ setUser }){

    const [userExists, setUserExists] = useState(true);

    return(
        <div id="login">
            {userExists ? (
                <>
                <LoginForm setUser={setUser} />
                <h2>Don't have an account?</h2>
                <button onClick={()=> setUserExists(false)}>Sign up</button>
                </>
            ):(
                <>
                <SignUpForm setUser={setUser} />
                <h2>Have an account</h2>
                <button onClick={()=> setUserExists(true)}>Login</button>
                </>
            )}
            </div>
    )
}

export default Login