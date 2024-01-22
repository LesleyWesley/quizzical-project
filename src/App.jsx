
import React from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TitlePage from "../src/components/TitlePage.jsx"
import QuizPage from "../src/components/QuizPage.jsx"

function App() {
    const [titlePage, setTitlePage] = React.useState(true)

    function togglePage() {
      setTitlePage(prevPage => !prevPage)
    }

    return (
      <div className="app">
        {titlePage ?
           <TitlePage handleToggle={togglePage}/> :
           <QuizPage />
        }
      </div>
    )
}

export default App
