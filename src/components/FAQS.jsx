import React from 'react'
import Sectionhead from './Sectionhead'
import {FaQuestion} from 'react-icons/fa';
import { faqs } from '../data';
import FAQ from './FAQ';

export default function FAQS() {
  return (
    <section className='faqs'>
        <div className="container faqs__container">
            <Sectionhead icon={<FaQuestion/>} title="FAQS"/>

            <div className="faqs__wrapper">
                {
                    faqs.map(({id, question, answer}) => {
                        return(
                            <FAQ question={question} answer={answer} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
