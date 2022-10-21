import React from 'react';
import Header from '../../components/Header';
import './About.css';
import header1 from '../../images/header_bg_1.jpg';
import storyimg from '../../images/about1.jpg';
import visionimg from '../../images/about2.jpg';
import missionimg from '../../images/about3.jpg';

function About() {
  return (
    <>
      <Header title="About US" image={header1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo quas ab laudantium sequi dolorem inventore dolor praesentium? Accusantium, iure?
      </Header>
      <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={storyimg} alt="storyimg" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis! Iusto, iste? In dolor expedita, nulla nobis quod rerum dolorum.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad repudiandae iste earum a eaque vel?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laborum.</p>
        </div>
        </div>
      </section>

      <section className='about__vision'>
      <div className="container about__vision-container">

      <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis! Iusto, iste? In dolor expedita, nulla nobis quod rerum dolorum.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad repudiandae iste earum a eaque vel?</p>
        </div>
        <div className="about__section-image">
          <img src={visionimg} alt="visionimg" />
        </div>
      </div>
      </section>
      <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={missionimg} alt="missionimg" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, perferendis! Iusto, iste? In dolor expedita, nulla nobis quod rerum dolorum.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad repudiandae iste earum a eaque vel?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, laborum.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About