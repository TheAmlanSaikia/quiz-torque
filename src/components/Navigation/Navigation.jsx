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
          setCurrentQuestion(null);
        }}>
        <h3 className='logo-text'>torque.</h3>
      </Link>
      <ul className='navlinks-secondary flex-row ml-auto list-style-none'>
        <Link
          to={"/"}
          // href='/Login/login.html'
          className='navlinks text-md link btn btn-primary-solid'
          onClick={() => {
            quizDispatch({ type: "RESET_ALL", payload: "" });
            setCurrentQuestion(null);
          }}>
          <i className='fa-solid fal-lg fa-user'></i>
          <p className='text-lg'>Home</p>
        </Link>
      </ul>
    </nav>
  );
};

export { Navigation };
