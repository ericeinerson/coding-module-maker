import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"

function Home(){

    return(
        <div id="home">
            <h1>Learn to code!</h1>
            <nav className="home-link">
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}
export default Home