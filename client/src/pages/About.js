import React from "react"
import "./About.css"

function About() {
    return(
        <div className="about">
            <h1>The purpose of this project is to help beginners learn how to create coding learning modules. The goals of the project are as follows:</h1>

            <ol>
                <li>interest anyone about coding, regardless of how much they already know</li>
                <li>expand the number of ways one can learn and improve how one can effectively learn</li>
                <li>help those interested learn new ways to teach</li>
            </ol>

            <h1> What I would like to add to this project in the future:</h1>

            <ol>
                <li>a terminology bank to allow users to study terms, add new ones, and connect them to different languages</li>
                <li>adding diagrams to each module to promote visual learning</li>
                <li>a search bar to filter modules, languages, and learning strategies</li>
                <li>more ideas that I have not thought of that promote learning coding</li>
            </ol>
        </div>
    )
}

export default About