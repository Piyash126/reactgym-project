import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';
import {FaLinkedinIn} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
        <div className="container footer__container">
            <article>
            <Link className='logo' to="/">
                    <img src={logo} alt="logo" />
            </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, neque.
                </p>
                <div className="footer__socials">
                <a href='https://linkedin.com' target='_blank' rel='norefferrer noopener'><FaLinkedinIn/></a>
                    <a href='https://facebook.com' target='_blank' rel='norefferrer noopener'><BsFacebook /></a>
                    <a href='https://twitter.com' target='_blank' rel='norefferrer noopener'><AiOutlineTwitter/></a>
                    <a href='https://instagram.com' target='_blank' rel='norefferrer noopener'><AiOutlineInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/triners">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/about">Blog</Link>
                <Link to="/plans">Case Studies</Link>
                <Link to="/triners">Events</Link>
                <Link to="/gallery">Communities</Link>
                <Link to="/contact">FAQS</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/about">Contact Us</Link>
                <Link to="/plans">Support</Link>
            </article>
        </div>

        <div className="footer__copyright">
            <small>2022 EGATOR TUTORIALS &copy; ALL Rights Reserved </small>
        </div>
    </footer>
  )
}
