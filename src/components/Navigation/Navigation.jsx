
import { Link } from "react-router-dom";
import { useQuiz } from "../../context/Quizcontext";
import "./Navigation.css";

const Navigation = () => {
  const { quizDispatch } = useQuiz();

  return (
    <nav className='navbar sticky flex-row items-center flew-wrap'>
      <div className='hamburger'></div>
      <Link
        to={"/"}
        onClick={() => {
          quizDispatch({ type: "RESET_ALL", payload: "" });
          setCurrentQuestion(0);
        }}>
        <h3 className='logo-text'>torque.</h3>
      </Link>
      <ul className='navlinks-secondary flex-row ml-auto list-style-none'>
        <a
          href='/Login/login.html'
          className='navlinks text-md link btn btn-primary-solid'>
          <i className='fa-solid fal-lg fa-user'></i>
          <p className='text-lg'>Login</p>
        </a>
      </ul>
    </nav>
  );
};

export { Navigation };
