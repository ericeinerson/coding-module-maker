import React, { useReducer } from "react"
import ModulePage from "./ModulePage"

function Modules({ lessons, languages}){

    return(
        <div>
            {lessons.map(lesson => (<ModulePage key={lesson.id} lesson={lesson} />))}
        </div>
    )
}
export default Modules