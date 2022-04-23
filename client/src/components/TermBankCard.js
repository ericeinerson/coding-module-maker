import React from "react"
import "./TermBankCard.css"

function TermBankCard({ term }) {

    return (
        <div id="term-bank-card">
            <p>{term.name}: {term.definition}</p>
        </div>
    )
}

export default TermBankCard;