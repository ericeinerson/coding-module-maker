import React,{ useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login"
import Modules from "./pages/Modules";
import SignUpPage from "./components/SignUpForm"

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    fetch("/auth")
    .then(r=> {
      if(r.ok){
        r.json().then(user=>setUser(user))
      }
    })
  },[])

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="App">
    <NavBar setUser={setUser}/>
    <Routes>
      <Route 
      exact path = "/"
        element = {<Home user={user}/>}
        >
      </Route>
      <Route path = "/modules"
        element = {<Modules />}
      >
      </Route>
      <Route path = "/loginpage"
        element = {<Login setUser={setUser}/>}
      >
      </Route>
      <Route path = "/signup"
        element = {<SignUpPage />}
      >
      </Route>
      <Route path = "/about"
        element = {<About />}
      >
      </Route>
    </Routes>
      <></>
    </div>
  );
}

export default App;
