import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import '../Home/Home.css'

const Header = () => {
    return (
      <div className="position-sticky sticky-top header">
        <nav className="navbar m-2 navbar-expand-lg navbar-dark  navbar-fixed-top">
          <NavLink className="navbar-brand" to="/">Snigdha Hassan</NavLink>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span  className= 'navbar-toggler-icon'></span>
            </button>
          <div className="collapse navbar-collapse " id="navbarMenu">
          <ul  className="navbar-nav ml-auto">
            <li className="nav-item active">
            <NavLink exact activeClassName="active-link" className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' activeClassName='active-link'  className="nav-link text-white">About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/projects'activeClassName='active-link' className="nav-link text-white ">Projects</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/contacts'activeClassName='active-link' className="nav-link text-white " >Contacts</NavLink>
            </li>
            
            <li className="nav-item resume mt-2 ml-2">
              <a className="nav-link text-dark" href="https://docs.google.com/document/d/1GMnLDBIGxsR3dwHraxhxzDe46XUlMNaDNJ7_sVaIEcI/edit?usp=sharing" rel="noopener noreferrer" target="_blank" >Resume</a>
            </li>
          </ul>
          </div>
        </nav>
      </div>
    );
};

export default Header;