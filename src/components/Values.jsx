import React from 'react';
import img from '../images/values.jpg';
import { values } from '../data';
import {GiCutDiamond} from 'react-icons/gi';
import Sectionhead from './Sectionhead';
import Card from '../UI/Card';

const Values = () => {
  return (
    <section className='values'>
        <div className="container container__values">
            <div className="values__left">
                <div className="values__image">
                <img src={img} alt="values" />
                </div>
            </div>
            <div className="values__right">
                <Sectionhead icon={<GiCutDiamond/>} title="Values"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, nulla?</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return(
                                <Card className="values-value" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values