import React from 'react'
import Sectionhead from './Sectionhead';
import {FaCrown} from 'react-icons/fa';
import { programs } from '../data';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import {AiOutlineCaretRight} from 'react-icons/ai';

export default function Programs() {
  return (
    <section className='programs'>
        <div className="container programs__container">
            <Sectionhead icon={<FaCrown />}  title="Programs"/>
            <div className="programs__wrapper">
                {
                    programs.map(({id, icon, title, info, path}) => {
                        return (
                            <Card className="programs__program" key={id}>
                                <span>{icon}</span>
                                <h2>{title}</h2>
                                <small>{info}</small>
                                <Link to={path} className="btn sm">Learn More<AiOutlineCaretRight/></Link>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
