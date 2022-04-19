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
  const [lessons, setLessons] = useState([]);
  const [languages, setLanguages] = useState([]);

  useEffect(()=>{
    fetch("/auth")
    .then(r=> {
      if(r.ok){
        r.json().then(user=>setUser(user))
      }
    })
  },[])

  useEffect(()=>{
    fetch("/lessons")
    .then(r=> {
      if(r.ok){
        r.json().then(lessons=>setLessons(lessons))
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
        element = {<Home />}
        >
      </Route>
      <Route path = "/modules"
        element = {<Modules  setLessons={setLessons} lessons={lessons} languages={languages}/>}
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
