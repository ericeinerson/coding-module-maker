import React from "react"
import "./ModuleCard.css"

function ModuleCard({ lesson }){
    
    return(
        <div>
            <h2>Module {lesson.id}</h2>
            <ol className="module-card">
                <li className="lesson-language">Lesson topic: {lesson.language.name}</li>
                <li className="lesson-difficulty">Level/Difficulty: {lesson.level}</li>
                <li className="lesson-description">{lesson.description}</li>
            </ol>
        </div>
    )
}
export default ModuleCard