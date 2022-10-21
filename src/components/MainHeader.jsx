import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/main_header.png';


export default function MainHeader() {
  return (
    <header className='main__header'>
        <div className="container main__header-container">
            <div className="main__header-left">
            <h4>*100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, cupiditate.</p>
          <Link to="/plans" className="btn lg">Get Started</Link>
            </div>
            <div className="main__header-right">
            <div className="main__header-circle"></div>
          <div className="main__header-image">
              <img src={img} alt="main-img" />
          </div>
            </div>
        </div>
    </header>
  )
}
