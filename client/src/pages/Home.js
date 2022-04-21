import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"

function Home({ user }){

    return(
        <div id="home">
            <h1>Welcome, {user.username}!</h1>
            <h2>Learn to code or create your own learning module!</h2>
            <nav className="home-link">
                <NavLink to="/about">App Info</NavLink>
            </nav>
        </div>
    )
}
export default Home