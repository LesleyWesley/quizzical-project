import React from "react"
import { decode } from "html-entities"
import Question from "/src/components/Question.jsx"

function QuizPage() {

  const [questionsData, setQuestionsData] = React.useState([])

  React.useEffect(function() {
      console.log("effect ran")
      fetch("https://opentdb.com/api.php?amount=5&type=multiple").then(res => res.json()).then(data => setQuestionsData(data.results))
  }, [])

  console.log(questionsData)

const questionsElement = questionsData.map(item => {
  return (
    <Question question={item.question} key={item.question} incorrect={item.incorrect_answers} correct={item.correct_answer}/>
  )
})

  return (
    <div className="quiz-page-container">
        {questionsElement}
    </div>
  )
}

export default QuizPage
