import { Category, Navigation } from "../../components";
import { quizCategory } from "../../data";
import "./Home.css";

const Home = () => {
  return (
    <div className='home-grid-container'>
      <Navigation />
      <header className='header-banner'>
        <section className='banner-wrapper flex-row justify-center flex-wrap'>
          <h3 className='banner-title'>
            Try torque, the online sports quiz game. Kill your boredom and make
            learning fun again.
          </h3>
        </section>
      </header>
      <main className='main main-container mt-1'>
        <h3 className='main-title'>Featured Categories</h3>
        <section className='home-cards-display mt-1'>
          {quizCategory.map(({ id, cateoryName, bgcolor, image,path }) => (
            <Category
              id={id}
              cateoryName={cateoryName}
              bgcolor={bgcolor}
              image={image}
              path={path}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export { Home };
