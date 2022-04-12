import React, {useState} from "react"
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

function Login({ setUser }){

    const [userExists, setUserExists] = useState(true);

    return(
        <div id="login">
            {userExists ? (
                <>
                <LoginPage setUser={setUser} />
                <h2>Don't have an account?</h2>
                <button onClick={()=> setUserExists(false)}>Sign up</button>
                </>
            ):(
                <>
                <SignUpPage setUser={setUser} />
                <h2>Have an account</h2>
                <button onClick={()=> setUserExists(true)}>Login</button>
                </>
            )}
            </div>
    )
}

export default Login