import React from "react"

function Footer() {
  return (
    <footer>
      <button className="check-answers">Check answers</button>

        <div className="footer--graded-div">
            <h2>You scored 3/5 correct answers</h2>
            <button className="play-again">Play again</button>
        </div>
    </footer>
  )
}

export default Footer
