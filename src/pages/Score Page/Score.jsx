import { Link } from "react-router-dom";
import { useQuiz } from "../../context/Quizcontext";
import "./Score.css";
const ScorePage = () => {
  const { quizState, quizDispatch, currentQuestion, setCurrentQuestion } =
    useQuiz();
  const { quizCategory } = quizState;
  const { questions, score, selectedanswer } = quizState;

  return (
    <>
      <div className='ml-auto mr-auto mt-4 score-box'>
        <div className='flex-col items-center flex-wrap'>
          <div className='question-box flex-col items-center mx-2 mt-1'>
            <h2>You played {quizCategory} quiz!</h2>
            {score < 21 ? (
              <h2 className='mt-1'>😢😢😢😢😢</h2>
            ) : (
              <h2 className='mt-1'>😇😇😇😇😇</h2>
            )}
            <h3 className='mt-2'>Your Score is {score}!!</h3>
          </div>
          <Link
            to={"/"}
            className='btn btn-primary-outline mt-3 quiz-btn'
            onClick={() => {
              setCurrentQuestion(currentQuestion - currentQuestion);
              quizDispatch({ type:"RESET_ALL", payload: "" });
            }}>
            Play again
          </Link>
        </div>
      </div>
    </>
  );
};

export { ScorePage };
