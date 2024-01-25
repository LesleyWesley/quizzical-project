import React from "react"
import Question from "/src/components/Question.jsx"

function QuizPage() {

  const [questionsData, setQuestionsData] = React.useState({})

  React.useEffect(function() {
      console.log("effect ran")
      fetch("https://opentdb.com/api.php?amount=5").then(res => res.json()).then(data => setQuestionsData(data))
  }, [])



  return (
    <div className="quiz-page-container">
        <Question />
    </div>
  )
}

export default QuizPage
