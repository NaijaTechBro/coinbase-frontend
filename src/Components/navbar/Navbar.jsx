import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
//import logo from '../../assets/Coinbase-logo.png';
import './navbar.css';

const Menu = () => (
    <>
        <p><a href='#Prices'>Prices</a></p>
        <p><a href='#Learn'>Learn</a></p>
        <p><a href='#Individuals'>Individuals</a></p>
        <p><a href='#Businesses'>Businesses</a></p>
        <p><a href='#Developers'>Developers</a></p>
        <p><a href='#Company'>Company</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='coinbase__navbar'>
            <div className='coinbase__navbar-links'>
                <div className='coinbase__navbar-links_logo'>
                    <img src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="logo" />
                </div>
                <div className='coinbase__navbar-links_container'>
                    <Menu />
                </div>
                <div className='coinbase__navbar-sign'>
                    <span><a href="#signin">Sign in</a></span>
                    <button type="button"><a href="#sign-up">Get Started</a></button>
                </div>
                <div className='coinbase__navbar-menu'>
                    {toggleMenu
                        ? < RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
                        : < RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className='coinbase__navbar-menu_container scale-up-center'>
                            <div className='coinbase__navbar-menu_container-links'>
                                <Menu />
                                <div className='coinbase__navbar-menu_container-links-sign'>
                                    <button type='button'><a href='#signin'>Sign in</a></button>
                                    <button type="button"><a href="#sign-up">Get Started</a></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar

