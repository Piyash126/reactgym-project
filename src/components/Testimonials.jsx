import React from 'react'
import Sectionhead from './Sectionhead';
import {ImQuotesLeft} from 'react-icons/im';
import Card from '../UI/Card';
import {testimonials} from '../data';
import {useState} from 'react';
import {IoIosArrowDropleft} from 'react-icons/io';
import {IoIosArrowDropright} from 'react-icons/io';

export default function Testimonials() {
  const [index, setIndex] = useState(1);
  const {name, quote, job, avatar} = testimonials[index];


  const prevTestimonialHandaler = () => {
    setIndex(prev => prev - 1);
    if(index <= 0) {
      setIndex(testimonials.length -1)
    }
}

const nextTestimonialHandaler = () => {
    setIndex(prev => prev + 1);

    if(index>=testimonials.length -1) {
      setIndex(0);
    }
}

  return (
    <section className='testimonials'>
        <div className="container testimonials__container">
            <Sectionhead icon={<ImQuotesLeft/>} title="Testimonials" className="testimonials__head"/>
            <Card className='testimonial'>
            <div className="testimonial__avatar">
              <img src={avatar} alt={name} />
            </div>
            <p className="testimonial-quote">{`${quote}`}</p>
            <h5>{name}</h5>
            <small className='testimonial__title'>{job}</small>
            </Card>
            <div className="testimonials__btn-cont">
            <button className='testimonial__btn' onClick={prevTestimonialHandaler}><IoIosArrowDropleft/></button>
          <button className='testimonial__btn' onClick={nextTestimonialHandaler}><IoIosArrowDropright/></button>
            </div>
        </div>
    </section>
  )
}
