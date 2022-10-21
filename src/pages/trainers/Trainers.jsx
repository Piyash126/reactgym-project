import React from 'react';
import './Trainers.css';
import Header from '../../components/Header';
import trainerimg from '../../images/header_bg_5.jpg';
import {trainers} from '../../data';
import Trainer from '../../components/Trainer';
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs';

function Trainers() {
  return (
    <>
    <Header title="Our Trainers" image={trainerimg}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste ab fugit porro qui similique?
    </Header>
    <section className='trainers'>
      <div className="container container__trainers">
        {
          trainers.map(({id,image, name, job, socials}) => {
            return(
              <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <BsInstagram/>, link: socials[0]},
                  {icon: <BsTwitter/>, link: socials[1]},
                  {icon: <BsFacebook/>, link: socials[2]},
                  {icon: <BsLinkedin/>, link: socials[3]}
                ]
              }/>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers