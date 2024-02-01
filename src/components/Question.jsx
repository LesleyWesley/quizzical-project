import React from "react"
import { decode } from "html-entities"

function Question(props) {

  //Builds array of answers
  const randomI = Math.floor(Math.random() * 4);
  const allAnswersArray = []
  for (let i = 0; i < props.incorrect.length; i++) {
    allAnswersArray.push(decode(props.incorrect[i]))
  }
  allAnswersArray.splice(randomI, 0, decode(props.correct))

  //Maps over allAnswersArray to return a radio input for each option
  const optionElements = allAnswersArray.map( option => {
    console.log(props.question)
    return (
      <label key={option}>
          <input
            type="radio"
            id={option}
            name={props.name} //needs to be different for every question
            value={option}
            //needs a checked value once state is written
            //needs an onChange value once state is written
          />
          <span className="option-button">{option}</span>
      </label>
    )
  })

//Actual component
  return (
    <div className="question-container">
      <h2>{decode(props.question)}</h2>
      <div className="options-container">
          {optionElements}
      </div>
    </div>
  )
}

export default Question
