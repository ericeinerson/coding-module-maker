import React, { useEffect } from "react"
import "./TermBank.css"
function TermBank() {

    useEffect(()=>{
        fetch("/terms")
        .then(r=> {
          if(r.ok){
            r.json().then(data => console.log(data))
          }
        })
      },[])

    return (
        <div>

        </div>
    )
}

export default TermBank;