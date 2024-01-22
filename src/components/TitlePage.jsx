import React from "react"

function TitlePage(props) {
  return (
    <div className="title-page-container">
        <h1>Quizzical</h1>
        <p className="subtitle">Think you've got what it takes to beat this quiz game?</p>
        <button type="button" className="start-button" onClick={props.handleToggle}>Start Quiz</button>
    </div>
  )
}

export default TitlePage
