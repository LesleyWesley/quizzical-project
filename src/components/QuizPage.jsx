import React from "react"
import { decode } from "html-entities"
import { nanoid } from "nanoid"
import Question from "/src/components/Question.jsx"
import Footer from "/src/components/Footer.jsx"

function QuizPage() {

  const [questionsData, setQuestionsData] = React.useState([])

  React.useEffect(function() {
      console.log("effect ran")
      fetch("https://opentdb.com/api.php?amount=5&type=multiple").then(res => res.json()).then(data => setQuestionsData(data.results))
  }, [])

  console.log(questionsData)

  const questionsElement = questionsData.map(item => {
    return (
      <Question
          question={item.question}
          key={nanoid()}
          incorrect={item.incorrect_answers}
          correct={item.correct_answer}
          name={nanoid()}
      />
    )
  })

  return (
    <form className="quiz-page-container">
        {questionsElement}
        <Footer/>
    </form>
  )
}

export default QuizPage
