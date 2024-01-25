import React from "react"
import Question from "/src/components/Question.jsx"

function QuizPage() {

  const [questionsData, setQuestionsData] = React.useState({})

  React.useEffect(() => {
      fetch("https://opentdb.com/api.php?amount=5").then(res => res.json()).then(data => console.log(data))
  }, [])


  return (
    <div className="quiz-page-container">
        
    </div>
  )
}

export default QuizPage
