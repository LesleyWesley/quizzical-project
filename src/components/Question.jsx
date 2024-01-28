import React from "react"

function Question(props) {

  //Builds array of answers
  const randomI = Math.floor(Math.random() * 4);
  const allAnswersArray = []
  for (let i = 0; i < props.incorrect.length; i++) {
    allAnswersArray.push(props.incorrect[i])
  }
  allAnswersArray.splice(randomI, 0, props.correct)

  //Maps over allAnswersArray to return a radio input for each option


  return (
    <div className="question-container">
      <h2>{props.question}</h2>
      <div className="options-container">
          <label>
              <input
                type="radio"
                id="Cabbage Patch Kids" //needs a prop
                name="option" //needs to be different for every question
                value="Cabbage Patch Kids" //needs a prop
                //needs a checked value once state is written
                //needs an onChange value once state is written
              />
              Cabbage Patch Kids
          </label>
      </div>
    </div>
  )
}

export default Question
