import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import '../Home/Home.css'

const Header = () => {

    return (
        <div className="position-sticky sticky-top header brand">
        <nav className="navbar  navbar-expand-lg navbar-light container navbar-fixed-top">
          <NavLink className="text-white navbar-brand" to="/">Snigdha Hassan</NavLink>
          <ul className='desktopNav navbar-nav  ml-auto'>
            <li className="nav-item active">
            <NavLink exact activeClassName="active-link" className="nav-link text-white" to="/">Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about' activeClassName='active-link'  className="nav-link text-white">About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/projects'activeClassName='active-link' className="nav-link text-white">Projects</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/contacts'activeClassName='active-link' className="nav-link text-white" >Contacts</NavLink>
            </li>
            
            <li className="nav-item resume ml-2">
              <a className="nav-link text-white" href="https://docs.google.com/document/d/1KbyTxxak5an2t8ietlI2QU80KKvgatLToiYVfPVBIv8/edit?fbclid=IwAR1PKanBT1elu2GI0vZfQ3gKAhrP-g0_NQfOHvGcrrkA7xMzRyy6oqBTP2U" rel="noopener noreferrer" target="_blank" >Resume</a>
            </li>
          </ul>
        </nav>
      </div>
    );
};

export default Header;