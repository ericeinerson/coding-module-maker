import React, { useReducer } from "react"
import ModuleCard from "../components/ModuleCard"
import "./Modules.css"

function Modules({ lessons, languages}){

    return(
        <div id="modules-page">
            {lessons.map(lesson => (<ModuleCard key={lesson.id} lesson={lesson} />))}
        </div>
    )
}
export default Modules