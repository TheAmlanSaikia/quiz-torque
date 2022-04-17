import { useQuiz } from "../../context/Quizcontext";
import { RulesData } from "../../data";
import { Link } from "react-router-dom";
import "./Rules.css";

const Rules = () => {
  const { quizstate } = useQuiz();

  return (
    <div className='flex-col items-center'>
      <h1 className='mt-3 text-centre'>Rules</h1>
      <ul className='mt-2 rules list-style-none'>
        {RulesData &&
          RulesData.map(({ id, rule }) => (
            <li className='mt-2' key={id}>
              <h3>⭐ {rule}</h3>
            </li>
          ))}
      </ul>
      <Link to='/quiz' className='btn btn-primary-outline mt-3 quiz-btn'>
        Play Now
      </Link>
    </div>
  );
};

export { Rules };
