import React from 'react';
import Card from '../UI/Card';

export default function Trainer({image, name, job, socials}) {
  return (
    <Card className="trainer">
        <div className="trainer__img">
            <img src={image} alt="" />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="trainer__socials">
            {
                socials.map(({link, icon}, index) => {
                    return(
                        <a href={link} key={index} target="_blank" rel='noreffer noopener'>{icon}</a>
                    )
                })
            }
        </div>
    </Card>
  )
}
