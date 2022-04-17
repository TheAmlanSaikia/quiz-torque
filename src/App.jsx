import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components";
import { Home, Rules, QuizPage, ScorePage } from "./pages";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/quiz' element={<QuizPage />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </div>
  );
}

export default App;
