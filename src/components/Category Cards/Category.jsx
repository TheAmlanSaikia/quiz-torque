import { Link } from "react-router-dom";
import { useQuiz } from "../../context/Quizcontext";
import "./Category.css";

const Category = ({ id, categoryName, bgcolor, image }) => {
  const { quizDispatch } = useQuiz();

  return (
    <>
      <main
        key={id}
        style={{ backgroundColor: bgcolor }}
        className='category-card card-shadow mr-1 pointer'
        onClick={() => {
          quizDispatch({
            type: "ADD_CATEGORIES",
            payload: categoryName.toLowerCase(),
          });
          quizDispatch({
            type: "ADD_QUESTIONS",
            payload: categoryName.toLowerCase(),
          });
        }}>
        <Link to='/rules'>
          <section className='category-image-container relative'>
            <img
              src={image}
              alt='Category'
              className='category-image absolute'
            />
          </section>
          <h3 className='ml-1 category-text-color'>Play</h3>
          <h3 className='ml-1 pb-1 category-text-color'>{categoryName}</h3>
        </Link>
      </main>
    </>
  );
};

export { Category };
