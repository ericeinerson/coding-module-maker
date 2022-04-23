import React, { useState, useEffect } from "react"
import "./TermBank.css"
import TermBankCard from "../components/TermBankCard"

function TermBank() {

    const [languages, setLanguages] = useState([])

      useEffect(()=>{
        fetch("/languages")
        .then(r=> {
          if(r.ok){
            r.json().then(languageData => setLanguages(languageData))
          }
        })
      },[])
      console.log(languages)

    return (
        <div>
            {languages.map(language=> 
                <div key={language.id}>
                    <h2>Language: {language.name}</h2>
                    {(language.terms.length>0) ? 
                        (
                        <ol>
                            <li>{language.terms.map(term => <TermBankCard key={term.id} term={term}/>)}</li>
                        </ol>
                        ):(
                        null
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default TermBank;