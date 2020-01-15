import React from 'react'
import {NavLink} from 'react-router-dom';
import './nav.css';

const Nav = () => {
	return (
		<React.Fragment>
		<div className="topnav fade-in">
		  <nav id="nav-links">
		    <NavLink to="/" exact={true}>Home</NavLink>
		    <NavLink to="/about">About</NavLink>
		    <NavLink to="/blog">Blog</NavLink>
		  </nav>
		</div>
		</React.Fragment>
	)
}

export default Nav