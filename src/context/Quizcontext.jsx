import { useContext, createContext } from "react";
import { useReducer } from "react";
import { useState } from "react";
import { initialstate, QuizReducer } from "../reducer/QuizReducer";

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(QuizReducer, initialstate);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <QuizContext.Provider
      value={{ currentQuestion, setCurrentQuestion, quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { useQuiz, QuizProvider };
