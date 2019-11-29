import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
	return (
		<div className="topnav">
		  <div id="nav-links">
		    <Link to="/" className="active">Home</Link>
		    <Link to="/about">About</Link>
		    <Link to="/blog">Blog</Link>
		    <Link to="/contact">Contact</Link>
		  </div>
		</div>
	)
}

export default Nav