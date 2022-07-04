import React, { useState, useEffect } from "react"
import ModuleCard from "../components/ModuleCard"
import "./Modules.css"

function Modules(){

    const [language, setLanguage] = useState("")
    const [level, setLevel] = useState("")
    const [description, setDescription] = useState("")
    const [deleteLesson, setDeleteLesson] = useState(null)
    const [lesson, setLesson] = useState("")
    const [lessons, setLessons] = useState([])
    const [languageArry, setLanguageArry] = useState([])

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
            r.json().then(languageData=>setLanguageArry(languageData))
          }
        })
      },[])

    function handleSearch(e) {
        e.preventDefault()
        setLessons( ()=> lessons.filter((l)=> (l.language.name.includes(lesson)) || (l.level === parseInt(lesson)) || (l.description.includes(lesson))))
    }

    function handleDelete(e) {
        e.preventDefault()
        fetch(`/lessons/${deleteLesson}`, {
            method: "DELETE",
        })
        .then(() => setLessons((lessons)=> lessons.filter((lesson)=> lesson.id !== parseInt(deleteLesson))))
    }

    function handleCreateModule(e){
        e.preventDefault()

        console.log(languageArry)

        const languageExists = languageArry.find(l=>l.name===language) 

        const lesson = {
            language,
            level,
            description,
        }

        if (!languageExists){

            const newLanguage = {
                language
            }

            fetch("/languages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newLanguage)
            })   
            .then(r => r.json)
            .then(languageData=>setLanguageArry([...languageArry, languageData]))
        }

        fetch("/lessons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(lesson)
        })   
        .then((r)=> r.json())
        .then((lesson)=>setLessons([...lessons, lesson]))
    }

    return(
        <div>
            <div id="create-module">
                <form id="delete-lesson" onSubmit={handleDelete}>
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
                        className = "input"
                        required = {true}
                        id = "module-input-language"
                        autoComplete = "off"
                        value = {language}
                        onChange = { (e) => setLanguage(e.target.value.toLowerCase())}
                        /><br></br>
                        <input 
                        placeholder="level"
                        className = "input"
                        required = {true}
                        id = "module-input-level"
                        autoComplete = "off"
                        value = {level}
                        onChange = { (e) => setLevel(e.target.value)}
                        /><br></br>
                        <input 
                        placeholder="description"
                        className = "input"
                        required = {true}
                        id = "module-input-description"
                        autoComplete = "off"
                        value = {description}
                        onChange = { (e) => setDescription(e.target.value)}
                        /><br></br>
                        <input value="create" type="submit"/>
                </form>
                <form id="search-modules" onSubmit={handleSearch}>
                    <input 
                    id="search" 
                    placeholder="search" 
                    type="text" 
                    value={lesson}
                    onChange={ (e) => setLesson(e.target.value)}
                    />
                    <button type="submit">Search Modules</button>
                </form>
                <button type="submit">Show All Modules</button>
            </div>
            <div id="modules-page">
                {lessons.map(lesson => (<ModuleCard key={lesson.id} lesson={lesson} />))}
            </div>
        </div>
    )
}
export default Modules