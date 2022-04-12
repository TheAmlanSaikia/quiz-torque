// import { Link } from "react-router-dom";


import "./Navigation.css";

const Navigation = () => {
 

  return (
    <nav className='navbar sticky flex-row items-center flew-wrap'>
      <div className='hamburger'></div>
      <h3>torque.</h3>
      <ul className='navlinks-secondary flex-row ml-auto list-style-none'>
       
          <a href='/Login/login.html' className='navlinks text-md link btn btn-primary-solid'>
            <i className='fa-solid fal-lg fa-user'></i>
            <p className='text-lg'>Profile</p>
          </a>
      </ul>
    </nav>
  );
};

export { Navigation };
