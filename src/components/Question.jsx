import React from "react"

function Question(props) {
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
