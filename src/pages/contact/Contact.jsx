import React from 'react';
import './Contact.css';
import Header from '../../components/Header';
import header2 from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';

function Contact() {
  return (
    <>
    <Header image={header2} title="Get In Touch">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate repellendus, officia neque architecto numquam dolore?
    </Header>
    <section className='contact'>
      <div className="container contact-container">
        <div className="contact__wrapper">
        <a href="mailto:forhaduddin195221@gmailcom" target='_blank' rel='norefferrer noopener'><MdEmail/></a>
        <a href="https://www.facebook.com/piyashtonni.forhad" target='_blank' rel='norefferrer noopener'><BsMessenger/></a>
        <a href="https://www.linkedin.com/in/forhad-uddin-455964171/" target='_blank' rel='norefferrer noopener'><AiFillLinkedin/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact