import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navigation } from './components'
import { Home } from './pages/Home/Home'
import { QuizPage } from './pages/Quiz Page/Quiz'
import { Rules } from './pages/Rules/Rules'

function App() {

  return (
    <div className="App">
      <Navigation />
      <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/rules' element={<Rules />} />
       <Route path='/quiz' element ={<QuizPage />} />
     </Routes>
    </div>
  )
}

export default App
