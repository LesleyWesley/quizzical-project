import React from "react"

function Question() {
  return (
    <div className="question-container">
      <h2>Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h2>
      <div className="options-container">
          <button type="button" className="option-button selected">Cabbage Patch Kids</button>
          <button type="button" className="option-button">Transformers</button>
          <button type="button" className="option-button">Care Bears</button>
          <button type="button" className="option-button">Rubik's Cube</button>
      </div>
    </div>
  )
}

export default Question
