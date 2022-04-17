import { useQuiz } from "../../context/Quizcontext";
import "./Quiz.css";

const QuizPage = () => {
  const { quizState, quizDispatch, currentQuestion, setCurrentQuestion } =
    useQuiz();
  const { quizCategory } = quizState;
  const { questions, score, selectedanswer } = quizState;
  return (
    <>
      <div className='quiz-box ml-auto mr-auto mt-4'>
        {questions[currentQuestion] && (
          <>
            <h6 className='pt-2 mx-2'>Question:{currentQuestion + 1}/5</h6>
            <div className='question-box mx-2 mt-1'>
              <h3>{questions[currentQuestion].question}</h3>
            </div>
            <form className=' mx-2 options-form'>
              {questions[currentQuestion]["options"].map((item) => (
                <div className='options mx-1 my-1'>
                  <label>
                    <input
                      key={item}
                      type='radio'
                      id={item}
                      value={item}
                      name={questions[currentQuestion].questionindex}
                      checked={selectedanswer === item}
                      onChange={() =>
                        quizDispatch({
                          type: "CHECK_ANSWER",
                          payload: item,
                          correct: questions[currentQuestion].correct,
                        })
                      }
                    />
                    <span className='text-xl'>{item}</span>
                  </label>
                </div>
              ))}
            </form>
          </>
        )}

        {questions.length === currentQuestion ? (
          <div className='flex-col items-center flex-wrap'>
            <div className='question-box mx-2 mt-1'>
              <h3>Game Over!</h3>
            </div>
            <button
              className='btn btn-primary-outline mt-3 quiz-btn'
              onClick={() => {
                setCurrentQuestion(currentQuestion - currentQuestion);
                quizDispatch({ type: "SET_SCORE", payload: -score });
              }}>
              Retry
            </button>
          </div>
        ) : (
          <button
            className='btn btn-primary-outline mt-3 next-btn ml-8'
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
              quizDispatch({ type: "SET_SCORE", payload: 10 });
            }}>
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export { QuizPage };
