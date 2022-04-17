import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QuizProvider } from './context/Quizcontext'

ReactDOM.render(
  <React.StrictMode>
  <QuizProvider>
   <BrowserRouter>
     <App />
   </BrowserRouter>
   </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
