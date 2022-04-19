import React, { useState } from "react"
import ModuleCard from "../components/ModuleCard"
import "./Modules.css"

function Modules({ lessons, setLessons }){

    const [language, setLanguage] = useState("")
    const [level, setLevel] = useState("")
    const [description, setDescription] = useState("")
    const [deleteLesson, setDeleteLesson] = useState(null)

    function handleDelete(e) {
        e.preventDefault()
        fetch(`/lessons/${deleteLesson}`, {
            method: "DELETE",
        })
        .then(() => setLessons(lessons.filter((lesson)=> lesson.id !== deleteLesson)))
    }

    function handleCreateModule(e){
        e.preventDefault()
        const lesson = {
            language,
            level,
            description
        }
        fetch("/lessons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(lesson)
        })   
    }

    return(
        <div>
            <div id="create-module">
                <form onSubmit={handleDelete}>
                    <select id="delete-lesson" onChange={(e)=> setDeleteLesson(e.target.value)}>
                        <option value="Select">Select</option>
                        {lessons.map(lesson => 
                        <option key={lesson.id} value={lesson.id}>Lesson #:{lesson.id} Language:{lesson.language.name}</option>
                        )}                        
                    </select>
                <input value="delete" type="submit"/>
                </form>
                <form id="new-lesson" onSubmit={handleCreateModule}>
                    <h2>Create your own module!</h2>
                    <input 
                        placeholder="language"
                        className = "input-language"
                        required = {true}
                        id = "module-input-language"
                        autoComplete = "off"
                        value = {language}
                        onChange = { (e) => setLanguage(e.target.value.toLowerCase())}
                        /><br></br>
                        <input 
                        placeholder="level"
                        className = "input-level"
                        required = {true}
                        id = "module-input-level"
                        autoComplete = "off"
                        value = {level}
                        onChange = { (e) => setLevel(e.target.value)}
                        /><br></br>
                        <input 
                        placeholder="description"
                        className = "input-description"
                        required = {true}
                        id = "module-input-description"
                        autoComplete = "off"
                        value = {description}
                        onChange = { (e) => setDescription(e.target.value)}
                        /><br></br>
                        <input value="create" type="submit"/>
                </form>
            </div>
            <div id="modules-page">
                {lessons.map(lesson => (<ModuleCard key={lesson.id} lesson={lesson} />))}
            </div>
        </div>
    )
}
export default Modules