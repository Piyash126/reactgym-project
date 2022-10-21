import React, { useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import {links} from '../data';
import {GrMenu} from 'react-icons/gr';
import {AiOutlineClose} from 'react-icons/ai';

function Navbar() {
    const [isNavShowing, setIsNavShowing] = useState(false);
        const navStyle =({isActive}) => {
        return {
            fontWeight: isActive ? 'bold': 'normal',
            borderBottom: isActive ? '2px solid yellow' : '',
            borderRadius: isActive ? '2px' : '',
        }
    }
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
                <img src={logo} alt="nav-logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav': 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return(
                            <li key={index}>
                                <NavLink to={path} style={navStyle} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='nav__toggle-btn' onClick={() => setIsNavShowing(prev => !prev)}>
                    {isNavShowing ? <AiOutlineClose/> : <GrMenu />}
            </button>
        </div>
    </nav>
  )
}

export default Navbar