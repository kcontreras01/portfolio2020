import React from 'react'
import {NavLink} from 'react-router-dom';

const Nav = () => {
	return (
		<div className="topnav">
		  <div id="nav-links">
		    <NavLink to="/" exact={true}>Home</NavLink>
		    <NavLink to="/about">About</NavLink>
		    <NavLink to="/blog">Blog</NavLink>
		  </div>
		</div>
	)
}

export default Nav