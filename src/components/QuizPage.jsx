import React from "react"
import Question from "/src/components/Question.jsx"

function QuizPage() {

  const [questionsData, setQuestionsData] = React.useState({})

  React.useEffect(function() {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => setQuestionsData(data))
  }, [])

  return (
    <div className="quiz-page-container">
      <pre>{JSON.stringify(questionsData, null, 2)}</pre>
    </div>
  )
}

export default QuizPage
