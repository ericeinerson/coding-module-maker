import React, { useState } from "react";
import {Link, NavLink} from "react-router-dom";
import "./Home.css"

function Home(){

    return(
        <div id="home">
            <h1>Welcome to my education app!</h1>
            <nav className="home-link">
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}
export default Home