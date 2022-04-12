import React from "react"

function ModulePage({ lesson }){

    return(
        <div className="modules-page">
            <h4>{lesson.language}</h4>
            <h4>Level/Difficulty: {lesson.level}</h4>
            <h4>{lesson.description}</h4>
        </div>
    )
}
export default ModulePage