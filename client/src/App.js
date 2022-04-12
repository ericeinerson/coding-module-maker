import React,{ useState,useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login"
import Modules from "./Modules";
import LoginPage from "./LoginPage"
import SignUpPage from "./SignUpPage"

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

  useEffect(()=>{
    fetch("/languages")
    .then(r=> {
      if(r.ok){
        r.json().then(languages=>setLanguages(languages))
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
        element = {<Modules lessons={lessons} languages={languages}/>}
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
    </Routes>
      <></>
    </div>
  );
}

export default App;
